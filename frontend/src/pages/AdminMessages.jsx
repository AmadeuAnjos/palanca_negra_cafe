// src/pages/AdminMessages.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Importar ícones específicos do Heroicons
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

// Ícones LinkedIn e GitHub (SVG otimizados para um visual mais limpo)
const LinkedInIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 9H0v12h4zM2 6a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.887-.013-1.744-2.782.607-3.37-1.336-3.37-1.336-.454-1.157-1.11-1.467-1.11-1.467-.908-.62.069-.608.069-.608 1.006.07 1.532 1.03 1.532 1.03.89 1.529 2.34 1.089 2.91.834.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.391-1.996 1.03-2.695-.103-.253-.448-1.273.097-2.659 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.386.202 2.406.097 2.659.64.699 1.029 1.599 1.029 2.695 0 3.848-2.339 4.695-4.566 4.942.359.307.678.915.678 1.846 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C21.137 20.19 24 16.437 24 12.017 24 6.484 19.522 2 14 2h-2z" clipRule="evenodd" />
  </svg>
);

// AQUI ESTÁ A MUDANÇA ESSENCIAL
const API_BASE_URL = import.meta.env.VITE_API_URL;

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);
  const navigate = useNavigate();
  const confirmModalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (confirmModalRef.current && !confirmModalRef.current.contains(event.target)) {
        setShowConfirmDeleteModal(false);
        setMessageToDelete(null);
      }
    };
    if (showConfirmDeleteModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showConfirmDeleteModal]);

  const formatDateTime = (isoString) => {
    try {
      const date = new Date(isoString);
      if (isNaN(date)) {
        return "Data inválida";
      }
      return new Intl.DateTimeFormat('pt-PT', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(date);
    } catch (e) {
      console.error("Erro ao formatar data:", e);
      return "Data indisponível";
    }
  };

  const fetchMessages = useCallback(async () => {
    setLoading(true);
    setError(null);
    const token = localStorage.getItem('accessToken');

    try {
      // AQUI ESTÁ A MUDANÇA NO FETCH
      const response = await fetch(`${API_BASE_URL}/api/admin/messages`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        alert('Sessão expirada ou não autorizado. Por favor, faça login novamente.');
        localStorage.removeItem('accessToken');
        navigate('/login', { replace: true });
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro HTTP! Estado: ${response.status}`);
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
      console.error("Erro ao buscar mensagens:", err);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setMessages, navigate]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const confirmDelete = (id) => {
    setMessageToDelete(id);
    setShowConfirmDeleteModal(true);
  };

  const handleDelete = async () => {
    if (!messageToDelete) return;

    setShowConfirmDeleteModal(false);
    const token = localStorage.getItem('accessToken');
    if (!token) {
      alert('Não autorizado. Por favor, faça login.');
      navigate('/login', { replace: true });
      return;
    }

    try {
      // AQUI ESTÁ A MUDANÇA NO FETCH
      const response = await fetch(`${API_BASE_URL}/api/admin/messages/${messageToDelete}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401 || response.status === 403) {
        alert('Sessão expirada ou não autorizado. Por favor, faça login novamente.');
        localStorage.removeItem('accessToken');
        navigate('/login', { replace: true });
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Erro HTTP! Estado: ${response.status}`);
      }

      setMessages(messages.filter(msg => msg.id !== messageToDelete));
      alert('Mensagem apagada com sucesso!');
      setMessageToDelete(null);

    } catch (err) {
      setError(`Erro ao apagar mensagem: ${err.message}`);
      console.error("Erro ao apagar mensagem:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login', { replace: true });
    alert('Você foi desconectado.');
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-gray-700">
        <svg className="animate-spin h-10 w-10 text-primary-dark mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-xl">A carregar mensagens...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-red-50 text-red-700 p-6 rounded-lg shadow-md m-4">
        <svg className="h-12 w-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h2 className="text-2xl font-bold mb-3">Ocorreu um Erro</h2>
        <p className="text-center mb-6">{error}</p>
        <button
          onClick={fetchMessages}
          className="bg-primary-dark hover:bg-primary text-white font-bold py-2 px-5 rounded-lg transition duration-200 shadow-md"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Administração - Mensagens | Palanca Negra Café</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Main content wrapper with flex-grow */}
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow bg-gray-50 p-4 sm:p-6 lg:p-8">
          {/* Cabeçalho e Botão Sair */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 text-center sm:text-left">Gestão de Mensagens</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Sair
            </button>
          </div>

          {/* Mensagens vazias */}
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-md">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m18-4a2 2 0 00-2-2H5a2 2 0 00-2 2m18 0v0a2 2 0 01-2 2H5a2 2 0 01-2-2m0 0V5a2 2 0 012-2h14a2 2 0 012 2v3"></path>
              </svg>
              <p className="text-xl text-gray-600 font-semibold">Nenhuma mensagem nova.</p>
              <p className="text-gray-500 mt-2">Relaxe, tudo parece tranquilo por aqui!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="rounded-lg shadow-md p-6 border border-gray-200 bg-white hover:shadow-lg transition duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">ID: {msg.id}</p>
                        <h3 className="text-lg font-bold text-gray-800">{msg.name}</h3>
                        <p className="text-sm text-blue-600 break-all">{msg.email}</p>
                      </div>
                      {/* Botão de Apagar */}
                      <button
                        onClick={() => confirmDelete(msg.id)}
                        className="text-red-600 hover:text-red-900 bg-red-100 hover:bg-red-200 p-2 rounded-full transition duration-200 flex-shrink-0"
                        title="Apagar Mensagem"
                        aria-label={`Apagar mensagem de ${msg.name}`}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                    <p className="mt-2 mb-4 text-justify leading-relaxed text-gray-700">{msg.message}</p>
                  </div>
                  <div className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100 flex justify-between items-center">
                    <p>Recebido em: {formatDateTime(msg.created_at)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="bg-primary text-white py-6 px-4 sm:px-6 lg:px-8 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            {/* Informações de Contacto */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg font-semibold mb-2">Amadeu dos Anjos Barros</p>
              <p className="text-sm">Web Developer</p>
              <p className="text-sm mt-2 flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-white" />
                <a href="tel:+351967978919" className="hover:text-gray-300 transition duration-200">967 978 919</a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-white" />
                <a href="mailto:anjosbarrosclean@icloud.com" className="hover:text-gray-300 transition duration-200">anjosbarrosclean@icloud.com</a>
              </p>
            </div>

            {/* Links para Redes Sociais */}
            <div className="flex gap-6 mt-4 md:mt-0">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/amadeuanjos/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-200" title="LinkedIn de Amadeu">
                <LinkedInIcon className="w-7 h-7" />
              </a>
              {/* GitHub */}
              <a href="https://github.com/AmadeuAnjos" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-200" title="GitHub de Amadeu">
                <GitHubIcon className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto text-center mt-4 text-sm text-gray-300">
            <p>&copy; {new Date().getFullYear()} Desenvolvido por Amadeu dos Anjos Barros. Todos os direitos reservados.</p>
          </div>
        </footer>

      </div> {/* End of Main content wrapper */}

      {/* Modal de Confirmação de Eliminação */}
      {showConfirmDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div ref={confirmModalRef} className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-auto transform scale-100 opacity-100 transition-all duration-300 ease-out">
            <div className="text-center mb-6">
              <svg className="mx-auto mb-4 h-12 w-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirmar Eliminação</h3>
              <p className="text-gray-600 text-sm">Tem certeza que deseja **apagar esta mensagem**? Esta ação não pode ser desfeita.</p>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmDeleteModal(false)}
                className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
                Apagar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}