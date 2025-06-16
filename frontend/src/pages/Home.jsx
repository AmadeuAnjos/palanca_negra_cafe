import { Link } from 'react-router-dom';

export default function Home() {
  const highlights = [
    {
      name: 'Pizza',
      description: 'Desfrute de uma explosão de sabores autênticos em cada fatia da nossa pizza.',
      price: '€ 10.00',
      image: '/images/pizza.jpg'
    },
    {
      name: 'Cachorro',
      description: 'Delicie-se com o nosso cachorro, uma explosão de sabor em cada mordida.',
      price: '€ 2.75',
      image: '/images/cachorro.jpg'
    },
    {
      name: 'Sandes de Fiambre',
      description: 'Crocante por fora, cremoso por dentro',
      price: '€ 2.00',
      image: '/images/sandefiambre.webp'
    },
    {
      name: 'Tosta Mista',
      description: 'Desfrute da simplicidade perfeita de uma tosta mista, crocante por fora e deliciosa por dentro.',
      price: '€ 2.00',
      image: '/images/tosta.webp'
    },
    {
      name: 'Pastel de Nata',
      description: 'Delicie-se com a nossa estrela da doçaria portuguesa: um pastel de nata cremoso por dentro e estaladiço por fora.',
      price: '€ 2.00',
      image: '/images/nata.jpg'
    },
    {
      name: 'Tiramisu',
      description: 'Deleite-se com o nosso tiramisu, uma sobremesa clássica com camadas de café, queijo mascarpone e cacau.',
      price: '€ 4.00',
      image: '/images/tiramisu.png'
    }
  ];

  return (
    <div className="font-sans">

      {/* Conteúdo Principal */}
      <main>
        {/* Hero Section */}
        <section 
          className="relative h-96 container mx-auto px-4 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Venha Conferir
            </h2>
            <p className="text-2xl mb-8">Pizzas - Sandes - Cachorros</p>
            <Link
              to="/cardapio"
              className="inline-block bg-white text-primary font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Ver Cardápio
            </Link>
          </div>
        </section>

        {/* Destaques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Nossos Destaques
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg shadow-md text-center border border-primary hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-40 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="mb-4">{item.description}</p>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section className="py-16 bg-primary text-black">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-serif font-bold mb-6 text-bl">
                  Nossa História
                </h2>
                <p className="mb-4 text-justify text-white">
                  O Palanca Negra Café, situado em Darque, Viana do Castelo, é um
                  espaço cheio de história e tradição, com 42 anos de vida a
                  servir a comunidade local e visitantes. Desde a sua abertura,
                  tornou-se um ponto de referência, conhecido pelo ambiente
                  acolhedor e pela variedade de delícias que oferece.
                </p>
                <p className="text-justify">
                  Ao longo das décadas, o Palanca Negra Café conquistou o coração
                  de quem por ali passa, seja para uma pausa rápida ou para
                  momentos de convívio. Os cachorros quentes e os bolos caseiros
                  são apenas algumas das iguarias que fazem parte do seu legado
                  gastronómico.
                </p>
                <Link
                  to="/sobre"
                  className="inline-block mt-6 bg-white text-primary font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
                >
                  Saiba Mais
                </Link>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/images/space.webp"
                  alt="Interior da Pastelaria"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}