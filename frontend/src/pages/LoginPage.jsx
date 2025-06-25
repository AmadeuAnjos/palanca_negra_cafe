import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('accessToken', data.accessToken);
        setMessage(data.message || 'Login bem-sucedido!');
        setTimeout(() => {
          navigate('/admin/messages');
        }, 1000);
      } else {
        setError(data.message || 'Erro no login. Verifique as suas credenciais.');
      }
    } catch (err) {
      setError('Erro de conexão: Não foi possível contactar o servidor. Tente novamente mais tarde.');
      console.error('Erro de rede ou servidor:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-100">
      <img
        src="/images/coffee-shop-login-bg.jpg"
        alt="Fundo de Cafeteria"
        className="absolute inset-0 h-full w-full object-cover z-0 filter brightness-[0.4] contrast-[1.1] scale-105 transition-transform duration-500 ease-out"
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20 bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300 ease-out">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-3xl font-playfair font-extrabold text-primary mb-2">
            Palanca Negra Café
          </h2>
          <p className="text-gray-600 py-2">Acesso Administrativo</p>
        </div>

        {message && (
          <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-md" role="alert">
            <p className="font-semibold">{message}</p>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md" role="alert">
            <p className="font-semibold">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-800 text-sm font-semibold mb-2">
              Nome de Utilizador
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de utilizador"
              required
              aria-label="Nome de Utilizador"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-800 text-sm font-semibold mb-2">
              Palavra-Passe
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-end text-sm">
            <Link to="/recuperar-senha" className="font-medium text-primary hover:text-primary-dark transition duration-200">
              Esqueceste-te da tua palavra-passe?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 active:bg-opacity-70 transition duration-300 ease-in-out text-lg flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isLoading}
              aria-live="polite"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  A Entrar...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-600 text-sm">
          Não tem conta?{' '}
          <Link to="/cadastrar" className="font-medium text-primary hover:text-primary-dark transition duration-200">
            Registar-se
          </Link>
        </div>
      </div>
    </div>
  );
}