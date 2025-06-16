const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'palanca_negra_cafe',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Teste de conexão inicial
pool.getConnection()
  .then(conn => {
    console.log('✅ Conexão com MySQL estabelecida');
    conn.release();
  })
  .catch(err => {
    console.error('❌ Erro de conexão MySQL:', err.message);
  });

// Rotas
app.get('/api/test', async (req, res) => {
  try {
    const [rows] = await pool.query('SHOW TABLES');
    res.json({ 
      success: true,
      tables: rows.map(row => row.Tables_in_palanca_negra_cafe)
    });
  } catch (err) {
    res.status(500).json({ 
      error: err.message,
      details: 'Verifique: 1) MySQL está rodando? 2) Banco existe? 3) Permissões do usuário root'
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`\n🟢 Servidor rodando: http://localhost:${PORT}`);
  console.log(`🔵 Banco configurado: palanca_negra_cafe`);
  console.log(`⚡ Teste a API em: http://localhost:${PORT}/api/test\n`);
});