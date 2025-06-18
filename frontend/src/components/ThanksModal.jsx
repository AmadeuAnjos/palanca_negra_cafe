// src/components/ThanksModal.jsx
import React from 'react';

export default function ThanksModal({ isOpen, onClose }) {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Fecha o modal clicando na área escura
    >
      <div
        className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-lg transform scale-95 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche-o
      >
        <div className="text-center">
          {/* Ícone de sucesso - verifique se o Font Awesome está configurado no seu index.html */}
          <i className="fas fa-check-circle text-5xl text-green-500 mb-4 animate-bounce"></i> 
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Muito obrigado!</h3>
          <p className="mb-6 text-gray-700">
            A sua mensagem foi enviada com sucesso. Entraremos em contacto
            brevemente.
          </p>
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}