// src/pages/AdminMessages.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirecionar

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Instância de useNavigate

  const fetchMessages = async () => {
    setLoading(true); // Redefine o estado de carregamento ao buscar novamente
    setError(null);   // Limpa erros anteriores

    const token = localStorage.getItem('accessToken'); // Obtém o token do localStorage

    try {
      const response = await fetch('/api/admin/messages', {
        headers: {
          'Authorization': `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });
      
      if (response.status === 401 || response.status === 403) {
        // Se o token for inválido ou ausente, redireciona para o login
        alert('Sessão expirada ou não autorizado. Por favor, faça login novamente.');
        localStorage.removeItem('accessToken'); // Remove o token inválido
        navigate('/login');
        return; // Sai da função para evitar processamento posterior
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
      console.error("Erro ao buscar mensagens:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []); 

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja apagar esta mensagem?')) {
      return; // Cancela se o utilizador não confirmar
    }

    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('Não autorizado. Por favor, faça login.');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`, // Adiciona o token no cabeçalho
        },
      });

      if (response.status === 401 || response.status === 403) {
        alert('Sessão expirada ou não autorizado. Por favor, faça login novamente.');
        localStorage.removeItem('accessToken');
        navigate('/login');
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Se a exclusão for bem-sucedida, atualiza a lista de mensagens no frontend
      setMessages(messages.filter(msg => msg.id !== id));
      alert('Mensagem apagada com sucesso!');

    } catch (err) {
      setError(`Erro ao apagar mensagem: ${err.message}`);
      console.error("Erro ao apagar mensagem:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Remove o token do localStorage
    navigate('/login'); // Redireciona para a página de login
    alert('Você foi desconectado.');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        A carregar mensagens...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-xl text-red-600">
        Erro: {error}
        <button 
            onClick={fetchMessages} 
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
            Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gestão de Mensagens</h1>
        <button 
          onClick={handleLogout} 
          className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Sair
        </button>
      </div>
      
      {messages.length === 0 ? (
        <p className="text-center text-gray-600">Nenhuma mensagem encontrada.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase tracking-wider">
                <th className="py-3 px-4 border-b">ID</th>
                <th className="py-3 px-4 border-b">Nome</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Mensagem</th>
                <th className="py-3 px-4 border-b">Recebido Em</th>
                <th className="py-3 px-4 border-b">Ações</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{msg.id}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{msg.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{msg.email}</td>
                  <td className="py-3 px-4 text-sm text-gray-800 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">{msg.message}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{new Date(msg.created_at).toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">
                    <button 
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-xs transition duration-200"
                      onClick={() => handleDelete(msg.id)} // Ativar a função de apagar
                    >
                      Apagar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}