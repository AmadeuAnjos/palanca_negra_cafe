import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThanksModal from '../components/ThanksModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async'; // Importar Helmet

// ---- AQUI ESTÁ A MUDANÇA PRINCIPAL ----
// Define a URL base da sua API usando a variável de ambiente do Vite
const API_BASE_URL = import.meta.env.VITE_API_URL;
// ---- FIM DA MUDANÇA PRINCIPAL ----

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // ---- AQUI ESTÁ A MUDANÇA NO FETCH ----
      // Agora o fetch usa a API_BASE_URL + o caminho da rota
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // ---- FIM DA MUDANÇA NO FETCH ----

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar mensagem');
      }

      setIsModalOpen(true);
      setFormData({ nome: '', email: '', mensagem: '' });
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Erro ao conectar com o servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <Helmet>
        {/* Título da Página */}
        <title>Contato - Fale com o Palanca Negra Café em Viana do Castelo</title>

        {/* Meta Descrição */}
        <meta
          name="description"
          content="Entre em contato com o Palanca Negra Café em Darque, Viana do Castelo. Envie sua mensagem, encontre nosso endereço, telefone e e-mail. Estamos aqui para ajudar!"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="contato, Palanca Negra Café, Viana do Castelo, Darque, telefone, email, endereço, mensagem, dúvidas, atendimento ao cliente"
        />

        {/* Canonical URL (muda para o teu domínio real para a página de contato) */}
        <link rel="canonical" href="https://www.teudominio.pt/contact" />

        {/* Open Graph Tags para partilha em redes sociais */}
        <meta property="og:title" content="Contato - Palanca Negra Café" />
        <meta property="og:description" content="Fale connosco no Palanca Negra Café. Envie a sua mensagem e obtenha o nosso contacto em Viana do Castelo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teudominio.pt/contact" /> {/* Muda para o teu domínio real */}
        <meta property="og:image" content="https://www.teudominio.pt/images/social-contact-banner.jpg" /> {/* Escolhe uma imagem relevante para contato */}
        <meta property="og:site_name" content="Palanca Negra Café" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contato - Palanca Negra Café" />
        <meta name="twitter:description" content="Fale connosco no Palanca Negra Café. Envie a sua mensagem e obtenha o nosso contacto em Viana do Castelo." />
        <meta name="twitter:image" content="https://www.teudominio.pt/images/social-contact-banner.jpg" /> {/* Escolhe uma imagem relevante para contato */}
      </Helmet>

      {/* Hero Section */}
      <section className="flex items-center justify-center">
        <div className="container mx-auto">
          <div
            className="relative h-96 px-4 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/images/banner1.jpg"
              alt="Banner de Lanches e Pizzas"
              className="absolute inset-y-0 h-full w-full object-cover z-0 brightness-50
                                          md:inset-x-4 md:w-[calc(100%-2rem)]"
            />

            <div
              className="absolute inset-y-0 h-full w-full bg-black opacity-40 z-10
                                          md:inset-x-4 md:w-[calc(100%-2rem)]"
            ></div>

            <div className="relative z-20 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                Esclareça as suas dúvidas
              </h2>
            </div>
          </div>
        </div>
      </section>

      
      {/* Formulário de Contato */}
<section className="py-16 bg-white flex items-center justify-center">
  <div className="container mx-auto px-4">
    <div>
      <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-black">
        Contacte-nos
      </h2>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="nome" className="block text-gray-700 font-montserrat mb-2">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            // ADICIONADAS AQUI: bg-white e text-black
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 bg-white text-black"
            placeholder="Seu nome"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-gray-700 font-montserrat mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            // ADICIONADAS AQUI: bg-white e text-black
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 bg-white text-black"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mensagem" className="block text-gray-700 font-montserrat mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            rows="5"
            value={formData.mensagem}
            onChange={handleChange}
            // ADICIONADAS AQUI: bg-white e text-black
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 bg-white text-black"
            placeholder="Como podemos ajudar?"
            required
          ></textarea>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300 shadow-md text-lg disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </div>
      </form>
    </div>
  </div>
</section>

      
      {/* Informações de Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12 text-black">
            Nossos Contatos
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-primary mb-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Endereço</h3>
              <address className="text-gray-600 font-montserrat not-italic">
                Rua 25 de Abril, 149<br />
                Darque, Viana do Castelo<br />
                Portugal<br />
                CEP: 4935-069
              </address>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-primary mb-4">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-5xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-600 font-montserrat">
                <a href="tel:+351258322747" className="hover:text-primary transition">
                  +351 258 322 747
                </a><br />
                Segunda a Sábado: 8h - 20h
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200">
              <div className="text-primary mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-5xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-gray-600 font-montserrat">
                <a href="mailto:contato@palancanegra.com" className="hover:text-primary transition">
                  contato@palancanegra.com
                </a><br />
                <a href="mailto:reservas@palancanegra.com" className="hover:text-primary transition">
                  reservas@palancanegra.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Mapa */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2106.945713083653!2d-8.784812130009374!3d41.68444391888554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd25b75f4a025b39%3A0x3885cc77276bc485!2sCAF%C3%89%20PALANCA%20NEGRA!5e0!3m2!1spt-PT!2spt!4v1750524618513!5m2!1spt-PT!2spt" 
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização do Palanca Negra Café"
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </section>

      <ThanksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}