import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Slider from 'react-slick'; // Importe o Slider do react-slick

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
      description: 'Crocante por fora, cremoso por dentro, com a melhor qualidade. Venha experimentar',
      price: '€ 2.00',
      image: '/images/sandefiambre.jpg'
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
      image: '/images/tiramisu.jpg'
    }
  ];

  // Dados dos banners para o carrossel (replicando as imagens 4 vezes)
  const bannerImages = [
    { src: '/images/banner1.jpg', alt: 'Banner de Lanches e Pizzas 1' },
    { src: '/images/space.webp', alt: 'Interior da Pastelaria' }, // Usando uma imagem que já tens
    { src: '/images/pizza.jpg', alt: 'Pizza em Destaque' }, // Usando uma imagem de highlight
    { src: '/images/cachorro.jpg', alt: 'Cachorro em Destaque' }, // Usando outra imagem de highlight
  ];

  // Configurações do carrossel
  const settings = {
    dots: true, // Mostra os pontos de navegação
    infinite: true, // Rolagem infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Mostra 1 slide por vez
    slidesToScroll: 1, // Avança 1 slide por vez
    autoplay: true, // Rolagem automática
    autoplaySpeed: 3000, // Intervalo de 3 segundos entre slides
    fade: true, // Adiciona um efeito de fade na transição
    cssEase: 'linear', // Tipo de curva de transição CSS
    arrows: false, // Oculta as setas de navegação (pode ser true se quiser)
  };

  return (
    <div className="font-sans">
      <Helmet>
        <title>Palanca Negra Café - Lanches, Pizzas, Doces e Mais em Viana do Castelo</title>

        <meta
          name="description"
          content="Descubra o Palanca Negra Café em Darque, Viana do Castelo. Oferecemos deliciosas pizzas, sandes, cachorros, tostas, pastéis de nata, tiramisu e muito mais. Venha experimentar a nossa tradição e sabor!"
        />

        <meta
          name="keywords"
          content="Palanca Negra Café, café, pastelaria, lanches, pizzas, cachorros, tostas, pastéis de nata, tiramisu, Viana do Castelo, Darque, restaurante, comida portuguesa, doces"
        />

        <link rel="canonical" href="https://www.teudominio.pt/" />

        <meta property="og:title" content="Palanca Negra Café - Lanches e Doces em Viana do Castelo" />
        <meta property="og:description" content="Experimente as melhores pizzas, sandes e doces tradicionais no Palanca Negra Café em Darque. Mais de 40 anos de sabor e tradição!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teudominio.pt/" />
        <meta property="og:image" content="https://www.teudominio.pt/images/banner.jpg" />
        <meta property="og:site_name" content="Palanca Negra Café" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Palanca Negra Café - Lanches e Doces em Viana do Castelo" />
        <meta name="twitter:description" content="Experimente as melhores pizzas, sandes e doces tradicionais no Palanca Negra Café em Darque. Mais de 40 anos de sabor e tradição!" />
        <meta name="twitter:image" content="https://www.teudominio.pt/images/banner.jpg" />
      </Helmet>

      <main>
        <section className="flex items-center justify-center">
          <div className="container mx-auto">
            {/* CARROSSEL AQUI */}
            <Slider {...settings} className="relative h-96 overflow-hidden">
              {bannerImages.map((banner, index) => (
                <div key={index} className="h-96 w-full relative">
                  <img
                    src={banner.src}
                    alt={banner.alt}
                    className="absolute inset-y-0 h-full w-full object-cover z-0 brightness-50 md:inset-x-4 md:w-[calc(100%-2rem)]"
                  />
                  {/* Overlay escuro */}
                  <div
                    className="absolute inset-y-0 h-full w-full bg-black opacity-40 z-10 md:inset-x-4 md:w-[calc(100%-2rem)]"
                  ></div>
                  {/* Conteúdo do banner */}
                  <div className="relative z-20 text-center text-white flex flex-col items-center justify-center h-full">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
                      Venha Conferir
                    </h2>
                    <p className="text-xl md:text-2xl">Explore a nossa variedade de petiscos</p>
                    <p className="text-xl md:text-2xl">snacks de padaria, pastelaria e pizzas</p>
                    <p className="text-xl md:text-2xl mb-4">Francesinhas, hambúrgueres e muito mais!</p>
                    <Link
                      to="/cardapio"
                      className="inline-block bg-white text-primary font-bold py-2 px-6 rounded-lg hover:bg-primary hover:text-white transition duration-300"
                    >
                      Ver Menu
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
            {/* FIM DO CARROSSEL */}
          </div>
        </section>

        <section className="py-16 bg-white text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair font-bold text-center mb-12">
              Nossos Destaques
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((item, index) => {
                const isSandesDeFiambre = item.name === 'Sandes de Fiambre';
                const imageBorder = isSandesDeFiambre
                  ? 'border border-primary rounded-lg'
                  : '';

                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg shadow-md text-center border border-primary hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="h-40 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className={`w-full h-full object-cover ${imageBorder}`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="mb-4">{item.description}</p>
                    <span className="text-primary font-bold text-lg">{item.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-playfair font-bold mb-6 text-white">
                  Nossa História
                </h2>
                <p className="mb-4 text-justify text-white">
                  O Palanca Negra Café, situado em Darque, Viana do Castelo, é um
                  espaço cheio de história e tradição, com 42 anos de vida a
                  servir a comunidade local e visitantes. Desde a sua abertura,
                  tornou-se um ponto de referência, conhecido pelo ambiente
                  acolhedor e pela variedade de delícias que oferece.
                </p>
                <p className="mb-4 text-justify text-white">
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