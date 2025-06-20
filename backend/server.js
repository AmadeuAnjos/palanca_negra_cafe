import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_se_nao_definido_em_env';

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(bodyParser.json());

// REMINDER: Este ADMIN_USER é APENAS para fins de autenticação do ADMIN antigo,
// e NÃO deve ser usado para login de utilizadores registados na DB.
const ADMIN_USER = {
    username: 'admin',
    password: 'password123'
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            console.error('Erro na verificação do token:', err);
            return res.status(403).json({ message: 'Token inválido ou expirado.' });
        }
        req.user = user;
        next();
    });
};

// --- ROTA DE LOGIN ATUALIZADA (para utilizar a base de dados) ---
app.post('/api/auth/login', async (req, res) => { // Adicionado 'async' pois vamos usar 'await'
    const { username, password } = req.body;

    console.log('--- Tentativa de Login (Via DB) ---');
    console.log('Username recebido:', username);
    console.log('Password recebida:', password ? '********' : 'Não fornecida');

    if (!username || !password) {
        console.log('Erro de login: Nome de utilizador e password são obrigatórios.');
        return res.status(400).json({ message: 'Nome de utilizador e password são obrigatórios.' });
    }

    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'palanca_negra_cafe'
        });

        // 1. Procurar o utilizador na base de dados
        const [users] = await connection.execute('SELECT id, username, password_hash FROM users WHERE username = ?', [username]);

        if (users.length === 0) {
            console.log(`Login falhou: Utilizador '${username}' não encontrado.`);
            return res.status(401).json({ message: 'Nome de utilizador ou senha incorretos.' });
        }

        const user = users[0]; // O utilizador encontrado
        const hashedPasswordFromDB = user.password_hash; // O hash da password guardado na DB

        // 2. Comparar a password fornecida com o hash guardado
        const passwordMatch = await bcrypt.compare(password, hashedPasswordFromDB);

        if (passwordMatch) {
            // Se as passwords coincidem, gerar token
            const tokenUser = { id: user.id, username: user.username }; // Usa dados do utilizador real da DB
            const accessToken = jwt.sign(tokenUser, JWT_SECRET, { expiresIn: '1h' });
            console.log(`Login bem-sucedido para o utilizador '${username}'! Token gerado e enviado.`);
            res.status(200).json({ accessToken: accessToken, message: 'Login bem-sucedido!' });
        } else {
            // Passwords não coincidem
            console.log(`Login falhou para o utilizador '${username}': Password incorreta.`);
            res.status(401).json({ message: 'Nome de utilizador ou senha incorretos.' });
        }

    } catch (error) {
        console.error('Erro interno do servidor durante o login:', error);
        res.status(500).json({ message: 'Erro interno do servidor durante o login.' });
    } finally {
        if (connection) {
            await connection.end();
            console.log('Conexão com o banco de dados fechada.');
        }
    }
});

// --- ROTA DE REGISTO EXISTENTE (sem alterações necessárias) ---
app.post('/api/auth/register', async (req, res) => {
    const { username, password } = req.body;

    console.log('--- Tentativa de Registo ---');
    console.log('Username recebido:', username);
    console.log('Password recebida:', password ? '******** (hashed)' : 'Não fornecida');

    // Validação de campos obrigatórios
    if (!username || !password) {
        console.log('Erro de registo: Nome de utilizador e password são obrigatórios.');
        return res.status(400).json({ message: 'Nome de utilizador e password são obrigatórios.' });
    }

    // Validação de comprimento da password (recomendado, para fins de dev pode ser mais baixo)
    if (password.length < 6) { // Mínimo de 6 caracteres para dev, idealmente 8+
        console.log('Erro de registo: Password muito curta.');
        return res.status(400).json({ message: 'A password deve ter pelo menos 6 caracteres.' });
    }

    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'palanca_negra_cafe'
        });

        // 1. Verificar se o utilizador já existe
        const [existingUsers] = await connection.execute('SELECT username FROM users WHERE username = ?', [username]);
        if (existingUsers.length > 0) {
            console.log(`Erro de registo: Utilizador '${username}' já existe.`);
            return res.status(409).json({ message: 'Nome de utilizador já existe. Por favor, escolha outro.' });
        }

        // 2. Hash da password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 é o 'salt rounds' - nível de complexidade do hash

        // 3. Inserir o novo utilizador na base de dados
        const [result] = await connection.execute(
            'INSERT INTO users (username, password_hash, created_at) VALUES (?, ?, NOW())',
            [username, hashedPassword]
        );

        console.log(`Utilizador '${username}' registado com sucesso! ID: ${result.insertId}`);
        res.status(201).json({ message: 'Utilizador registado com sucesso!' });

    } catch (error) {
        console.error('Erro interno do servidor ao registar utilizador:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao registar o utilizador.' });
    } finally {
        if (connection) {
            await connection.end();
            console.log('Conexão com o banco de dados fechada.');
        }
    }
});


// --- OUTRAS ROTAS (CONTACT, ADMIN MESSAGES) ---
app.post('/api/contact', async (req, res) => {
    const { nome, email, mensagem } = req.body;

    if (!nome || !email || !mensagem) {
        return res.status(400).json({ message: 'Todos os campos (nome, email, mensagem) são obrigatórios.' });
    }

    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'palanca_negra_cafe'
        });

        const [rows] = await connection.execute(
            'INSERT INTO messages (name, email, message, created_at) VALUES (?, ?, ?, NOW())',
            [nome, email, mensagem]
        );

        console.log('Mensagem salva no banco de dados com sucesso! ID:', rows.insertId);

        res.status(200).json({ message: 'Mensagem enviada com sucesso!' });

    } catch (error) {
        console.error('Erro no servidor ao processar formulário:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao enviar a mensagem. Por favor, tente novamente mais tarde.' });

    } finally {
        if (connection) {
            await connection.end();
            console.log('Conexão com o banco de dados fechada.');
        }
    }
});

app.get('/api/admin/messages', authenticateToken, async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'palanca_negra_cafe'
        });

        const [rows] = await connection.execute('SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC');

        console.log('Mensagens obtidas do banco de dados.');
        res.status(200).json(rows);

    } catch (error) {
        console.error('Erro no servidor ao buscar mensagens:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao buscar as mensagens.' });
    } finally {
        if (connection) {
            await connection.end();
            console.log('Conexão com o banco de dados fechada.');
        }
    }
});

app.delete('/api/admin/messages/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    let connection;

    try {
        connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'palanca_negra_cafe'
        });

        const [result] = await connection.execute('DELETE FROM messages WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            console.log(`Tentativa de apagar mensagem com ID ${id}, mas não encontrada no DB.`);
            return res.status(404).json({ message: 'Mensagem não encontrada.' });
        }

        console.log(`Mensagem com ID ${id} apagada com sucesso do DB.`);
        res.status(200).json({ message: 'Mensagem apagada com sucesso!' });

    } catch (error) {
        console.error(`Erro no servidor ao apagar mensagem com ID ${id}:`, error);
        res.status(500).json({ message: 'Erro interno do servidor ao apagar a mensagem.' });
    } finally {
        if (connection) {
            await connection.end();
            console.log('Conexão com o banco de dados fechada.');
        }
    }
});

app.listen(port, () => {
    console.log(`Backend rodando em http://localhost:${port}`);
    console.log('Aguardando requisições na rota /api/contact (POST)');
    console.log('Aguardando requisições na rota /api/auth/login (POST)');
    console.log('Aguardando requisições na rota /api/auth/register (POST)');
    console.log('Aguardando requisições na rota /api/admin/messages (GET - PROTEGIDA!)');
    console.log('Aguardando requisições na rota /api/admin/messages/:id (DELETE - PROTEGIDA!)');
});