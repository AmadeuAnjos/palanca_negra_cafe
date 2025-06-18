import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Mantido, caso precise de links internos
import ThanksModal from '../components/ThanksModal'; // Importe o componente do modal de agradecimento

export default function Contact() {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  // Estado para controlar a visibilidade do modal de agradecimento
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lida com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { id, value } = e.target; // Usar 'id' para corresponder aos nomes dos campos no estado
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // Atualiza o campo correspondente no estado
    }));
  };

  // Lida com a submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento padrão da página

    console.log('Dados do formulário enviados:', formData);

    // --- LÓGICA DE ENVIO DO FORMULÁRIO (ESCOLHA UMA OPÇÃO) ---

    // Opção 1: Simulação de envio (para desenvolvimento)
    try {
      // Simula uma chamada de rede com um atraso de 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsModalOpen(true); // Abre o modal de agradecimento
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' }); // Limpa o formulário
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
    }

    // Opção 2: Para Netlify Forms (adicione data-netlify="true" na tag <form> e o input oculto)
    /*
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": "contact-form", ...formData }).toString(),
    })
    .then(() => {
      setIsModalOpen(true); // Abre o modal
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' }); // Limpa o formulário
    })
    .catch((error) => alert("Erro ao enviar formulário: " + error));
    */

    // Opção 3: Para Backend customizado (requer um servidor Node.js, PHP, etc.)
    /*
    try {
      const response = await fetch('/api/send-contact-email', { // Substitua pela sua URL de API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsModalOpen(true); // Abre o modal
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' }); // Limpa o formulário
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || 'Não foi possível enviar a mensagem.'}`);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Ocorreu um erro na conexão. Verifique sua internet e tente novamente.');
    }
    */
  };


  return (
    <div className="font-sans"> {/* Aplica a fonte principal ao div pai */}

      {/* Hero Section */}
      <section 
        className="relative h-96 container mx-auto px-4 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contato-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4"> {/* Ajustado para font-playfair */}
            Fale Conosco
          </h2>
          <p className="text-2xl mb-8">Estamos aqui para responder às suas dúvidas</p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12"> {/* Ajustado para font-playfair */}
              Envie sua Mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label htmlFor="nome" className="block text-gray-700 font-montserrat mb-2">Nome Completo</label> {/* Ajustado para font-montserrat */}
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" // Atributo 'name' para o estado
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                  placeholder="Seu nome"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-montserrat mb-2">E-mail</label> {/* Ajustado para font-montserrat */}
                <input 
                  type="email" 
                  id="email" 
                  name="email" // Atributo 'name' para o estado
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="telefone" className="block text-gray-700 font-montserrat mb-2">Telefone</label> {/* Ajustado para font-montserrat */}
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" // Atributo 'name' para o estado
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                  placeholder="+351 XXX XXX XXX"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="block text-gray-700 font-montserrat mb-2">Mensagem</label> {/* Ajustado para font-montserrat */}
                <textarea 
                  id="mensagem" 
                  name="mensagem" // Atributo 'name' para o estado
                  rows="5"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                  placeholder="Como podemos ajudar?"
                  required
                ></textarea>
              </div>
              
              <div className="md:col-span-2 text-center">
                <button 
                  type="submit"
                  className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300 shadow-md text-lg" // Adicionado shadow e text-lg
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12"> {/* Ajustado para font-playfair */}
            Nossos Contatos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Endereço */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-primary mb-4">
                <i className="fas fa-map-marker-alt text-5xl"></i> {/* Ícone Font Awesome */}
              </div>
              <h3 className="text-xl font-bold mb-2">Endereço</h3>
              <p className="text-gray-600 font-montserrat"> {/* Ajustado para font-montserrat */}
                Rua 25 de Abril, 149<br />
                Darque, Viana do Castelo<br />
                Portugal<br />
                CEP: 4935-069
              </p>
            </div>
            
            {/* Telefone */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-primary mb-4">
                <i className="fas fa-phone-alt text-5xl"></i> {/* Ícone Font Awesome */}
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-600 font-montserrat"> {/* Ajustado para font-montserrat */}
                +351 258 322 747<br />
                Segunda a Sábado: 8h - 20h
              </p>
            </div>
            
            {/* E-mail */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-primary mb-4">
                <i className="fas fa-envelope text-5xl"></i> {/* Ícone Font Awesome */}
              </div>
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-600 font-montserrat"> {/* Ajustado para font-montserrat */}
                contato@palancanegra.com<br />
                reservas@palancanegra.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.7937397775988!2d-8.790933930438186!3d41.67844053676839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b42d7b42023d%3A0x62a87c530e159a6d!2sRua%2025%20de%20Abril%2C%20149%2C%204935-069%20Darque%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1718637775583!5m2!1spt-PT!2spt" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              title="Localização do Palanca Negra Café"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Modal de Agradecimento, controlado pelo estado 'isModalOpen' */}
      <ThanksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}