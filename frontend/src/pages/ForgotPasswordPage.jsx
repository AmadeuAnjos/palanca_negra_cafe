import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // This line is correct and should appear only once.

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line
  const navigate = useNavigate(); // Correct initialization of the hook.

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (response.ok) {
        // As discussed, no navigation here. User needs to check email.
        setMessage(data.message || 'Se o utilizador existir, um link de recuperação de senha foi enviado para o seu email associado.');
        setUsername(''); // Clear the input field on success.
      } else {
        setError(data.message || 'Erro ao tentar recuperar a senha. Verifique o nome de utilizador.');
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
          <h2 className="text-4xl md:text-2xl font-playfair font-extrabold text-primary mb-2">
            Palanca Negra Café
          </h2>
          <p className="text-xl text-gray-600 py-2">Recuperar Senha</p>
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 text-gray-800 placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu nome de utilizador"
              required
              aria-label="Nome de Utilizador"
            />
            <p className="text-sm text-gray-500 mt-2">
              Um link de recuperação será enviado para o email associado a esta conta (se existir).
            </p>
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
                  A Enviar...
                </span>
              ) : (
                'Enviar Link de Recuperação'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-gray-600 text-sm">
          <Link to="/login" className="font-medium text-primary hover:text-primary-dark transition duration-200">
            Voltar para Login
          </Link>
        </div>
      </div>
    </div>
  );
}