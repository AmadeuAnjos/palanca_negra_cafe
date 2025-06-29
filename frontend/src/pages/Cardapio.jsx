import React from 'react';
// IMPORTANTE: Importar Helmet do pacote correto
// Se estiveres a usar React 19 e tiveste problemas com react-helmet-async,
// mantém o import de 'react-helmet-async' e certifica-te que usaste 'npm install --legacy-peer-deps'.
// Não deves usar 'react-helmet-async-next' pois não existe.
import { Helmet } from 'react-helmet-async'; 

export default function Cardapio() {
  // Combinando os dados de Destaques, Salgados e Pratos/Snacks em um único array
  const menuPrincipal = [ // Renomeado para 'menuPrincipal' para refletir que contém várias categorias
    { // Destaques Originais
      name: 'Pizza',
      description: 'A nossa especialidade: massa estaladiça, molho caseiro e ingredientes frescos.',
      price: '€ 10.50',
      image: '/images/pizza.jpg'
    },
    {
      name: 'Cachorro',
      description: 'O nosso famoso cachorro, com salsicha de qualidade, molho secreto e batata palha.',
      price: '€ 3.00',
      image: '/images/cachorro.jpg'
    },
    {
      name: 'Pastel de Nata',
      description: 'A nossa estrela da doçaria portuguesa: cremoso por dentro e estaladiço por fora.',
      price: '€ 1.20',
      image: '/images/nata.jpg'
    },
    {
      name: 'Sandes de Fiambre',
      description: 'Sandes simples e saborosa, com fiambre e queijo derretido no pão fresquinho.',
      price: '€ 2.50',
      image: '/images/sandefiambre.jpg'
    },
    {
      name: 'Tosta Mista',
      description: 'Desfrute da simplicidade perfeita de uma tosta mista, crocante por fora e deliciosa por dentro, com extra queijo.',
      price: '€ 2.50',
      image: '/images/tosta.webp'
    },
    {
      name: 'Bifana no Pão',
      description: 'Tenras fatias de porco marinadas e cozinhadas em molho tradicional, servidas no pão da região.',
      price: '€ 4.50',
      image: '/images/bifana-pao.webp'
    },
    // Pastéis e Salgados Tradicionais (antigo array 'salgados')
    {
      name: 'Pastel de Carne', // 'name' para consistência
      description: 'Carne moída temperada com especiarias e cebola, frito na perfeição.',
      price: '€ 2.50',
      image: '/images/pastel.jpg' // 'image' para consistência
    },
    {
      name: 'Pastel de Queijo Fresco',
      description: 'Queijo derretido com um toque de orégãos, ideal para os amantes de queijo.',
      price: '€ 2.00',
      image: '/images/pastel.jpg'
    },
    {
      name: 'Pastel de Frango e Bacon',
      description: 'Frango desfiado com um toque cremoso e pedacinhos de bacon estaladiço.',
      price: '€ 2.80',
      image: '/images/pastel.jpg'
    },
    {
      name: 'Rissol de Camarão',
      description: 'Delicioso rissol recheado com um cremoso e suculento refogado de camarão fresco.',
      price: '€ 1.80',
      image: '/images/rissol-camarao.jpg'
    },
    {
      name: 'Crocante de Alheira',
      description: 'Alheira de Mirandela envolvida em massa crocante, uma autêntica iguaria transmontana.',
      price: '€ 2.20',
      image: '/images/alheira-crocante.jpg'
    },
    {
      name: 'Folhado de Salsicha',
      description: 'Salsicha envolvida em massa folhada estaladiça, um snack rápido e saboroso.',
      price: '€ 1.50',
      image: '/images/folhado-salsicha.jpg'
    },
    // Pratos e Snacks Portugueses (antigo array 'pratosESnacks')
    {
      name: 'Prego no Pão',
      description: 'Tenra fatia de bife de vaca grelhado no ponto, servida no pão. Uma refeição simples e saborosa.',
      price: '€ 5.00',
      image: '/images/prego.jpg'
    },
    {
      name: 'Francesinha',
      description: 'Uma versão da famosa sanduíche do Porto, com molho rico e picante, queijo derretido e batata frita.',
      price: '€ 8.50',
      image: '/images/francesinha.jpg'
    },
    {
      name: 'Sopa do Dia',
      description: 'Sopa fresca preparada diariamente com os melhores ingredientes da época. Pergunte à nossa equipa pela sugestão de hoje!',
      price: '€ 3.00',
      image: '/images/sopa.jpg'
    }
  ];

  const doces = [
    {
      nome: 'Bolo de Bolacha',
      descricao: 'Um clássico da doçaria portuguesa, com camadas de bolacha crocante e um delicioso creme de café.',
      preco: '€ 3.50',
      image: '/images/bolo-bolacha.jpg'
    },
    {
      nome: 'Arroz Doce Cremoso',
      descricao: 'Arroz doce tradicional português, cozido lentamente e polvilhado com canela. Uma sobremesa reconfortante.',
      preco: '€ 2.80',
      image: '/images/arroz-doce.jpg'
    },
    {
      nome: 'Tiramisu Italiano',
      descricao: 'Deleite-se com o nosso autêntico tiramisu, uma sobremesa clássica com camadas de café, queijo mascarpone e cacau em pó.',
      price: '€ 4.00',
      image: '/images/tiramisu.jpg'
    },
    {
      nome: 'Mousse de Chocolate Caseira',
      descricao: 'Deliciosa e aveludada mousse de chocolate, feita com cacau de alta qualidade.',
      price: '€ 3.20',
      image: '/images/mousse-chocolate.jpg'
    },
    {
      nome: 'Toucinho do Céu',
      descricao: 'Doce conventual português, com amêndoa e fios de ovos. Uma verdadeira tentação.',
      preco: '€ 2.90',
      image: '/images/toucinho-ceu.jpg'
    },
    {
      nome: 'Pudim Abade de Priscos',
      descricao: 'Um pudim tradicionalmente português, rico e cremoso, com um toque de vinho do Porto e toucinho. Para os mais audazes!',
      preco: '€ 3.80',
      image: '/images/pudim-abade-priscos.jpg'
    }
  ];

  const bebidas = [
    {
      nome: 'Café Expresso',
      descricao: 'Café 100% arábica, intenso e aromático, tirado na hora.',
      preco: '€ 0.80',
      icone: 'fa-coffee'
    },
    {
      nome: 'Galão Tradicional',
      descricao: 'Café com leite servido num copo alto, ideal para o pequeno-almoço ou lanche da tarde.',
      preco: '€ 1.50',
      icone: 'fa-mug-hot'
    },
    {
      nome: 'Meia de Leite',
      descricao: 'Café com leite em partes iguais, servido em chávena. O equilíbrio perfeito.',
      preco: '€ 1.20',
      icone: 'fa-coffee'
    },
    {
      nome: 'Cerveja Nacional (Imperial)',
      descricao: 'Cerveja de pressão, fresca e leve, perfeita para refrescar.',
      preco: '€ 2.50',
      icone: 'fa-beer'
    },
    {
      nome: 'Vinho da Casa (Copo)',
      descricao: 'Seleção de vinho tinto ou branco da casa, ideal para acompanhar as refeições e petiscos.',
      preco: '€ 2.00',
      icone: 'fa-wine-glass-alt'
    },
    {
      nome: 'Sumo Natural do Dia',
      descricao: 'Sumo fresco preparado no momento (laranja, ananás ou maracujá, consoante a disponibilidade e época).',
      preco: '€ 3.00',
      icone: 'fa-glass-whiskey'
    },
    {
      nome: 'Água Mineral (50cl)',
      descricao: 'Água natural engarrafada, para hidratação em qualquer momento.',
      preco: '€ 1.00',
      icone: 'fa-water'
    },
    {
      nome: 'Chá Quente (Várias Opções)',
      descricao: 'Seleção de chás de ervas e frutados, quentes e reconfortantes.',
      preco: '€ 1.80',
      icone: 'fa-mug-hot'
    },
    {
      nome: 'Refrigerante (Lata 33cl)',
      descricao: 'Diversas opções de refrigerantes em lata (Coca-Cola, Fanta, Sprite, etc.).',
      preco: '€ 2.00',
      icone: 'fa-glass-whiskey '
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Helmet>
        {/* Título da Página */}
        <title>Cardápio - Palanca Negra Café | Lanches, Pizzas, Doces e Bebidas em Viana do Castelo</title>

        {/* Meta Descrição */}
        <meta
          name="description"
          content="Descubra o cardápio completo do Palanca Negra Café em Viana do Castelo. Lanches, pizzas, salgados tradicionais, doces e uma vasta seleção de bebidas. Sabores que apaixonam!"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="cardápio, menu, Palanca Negra Café, Viana do Castelo, lanches, pizzas, salgados, doces, sobremesas, bebidas, café, pratos, snacks, pastel de nata, bifana, francesinha"
        />

        {/* Canonical URL (muda para o teu domínio real para a página do cardápio) */}
        <link rel="canonical" href="https://www.teudominio.pt/cardapio" />

        {/* Open Graph Tags para partilha em redes sociais */}
        <meta property="og:title" content="Cardápio do Palanca Negra Café" />
        <meta property="og:description" content="Explore o cardápio delicioso do Palanca Negra Café: lanches, pizzas, doces e bebidas. Venha saborear em Viana do Castelo!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.teudominio.pt/cardapio" /> {/* Muda para o teu domínio real */}
        <meta property="og:image" content="https://www.teudominio.pt/images/social-cardapio-banner.jpg" /> {/* Escolhe uma imagem relevante do cardápio */}
        <meta property="og:site_name" content="Palanca Negra Café" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cardápio do Palanca Negra Café" />
        <meta name="twitter:description" content="Explore o cardápio delicioso do Palanca Negra Café: lanches, pizzas, doces e bebidas. Venha saborear em Viana do Castelo!" />
        <meta name="twitter:image" content="https://www.teudominio.pt/images/social-cardapio-banner.jpg" /> {/* Escolhe uma imagem relevante do cardápio */}
      </Helmet>

      <main className="flex-grow">
        {/* Banner - SEM ALTERAÇÕES */}
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
                  Nosso Cardápio
                </h2>
                <p className="text-2xl mb-8">Sabores que Apaixonam!</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECÇÃO PRINCIPAL (Destaques, Salgados, Pratos e Snacks agora JUNTOS) */}
        <section className="py-16 bg-gray-100 md:bg-gray-50 text-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Nossas Especialidades</h2>
              <p className="max-w-2xl mx-auto">
                Descubra a variedade dos nossos pratos principais, snacks e salgados, preparados com carinho e tradição.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {menuPrincipal.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
                  {/* Condição para exibir imagem ou ícone */}
                  {item.image ? (
                    <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-gray-200 rounded-lg">
                      <i className={`fas ${item.icon} text-4xl text-gray-400`}></i> {/* Usando 'item.icon' e 'name' */}
                    </div>
                  )}
                  {/* Conteúdo do lado direito */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3> {/* Usando 'item.name' */}
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.description || item.descricao}</p> {/* Usa 'description' ou 'descricao' */}
                    <span className="text-primary font-bold text-base">{item.price || item.preco}</span> {/* Usa 'price' ou 'preco' */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cardápio Doces e Sobremesas - SEM ALTERAÇÕES na estrutura */}
        <section className="py-16 bg-white text-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Doces e Sobremesas Tradicionais</h2>
              <p className="max-w-2xl mx-auto">
                Deliciosas opções para satisfazer o seu desejo por um sabor mais doce, desde clássicos portugueses a favoritos internacionais.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {doces.map((item, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg shadow-md flex items-center gap-4">
                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.nome}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800">{item.nome}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.descricao}</p>
                    <span className="text-primary font-bold text-base">{item.preco}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bebidas - SEM ALTERAÇÕES na estrutura, apenas mantendo o ajuste anterior */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Nossas Bebidas</h2>
              <p className="max-w-2xl mx-auto text-gray-200">
                Acompanhe o seu momento no Palanca Negra com as nossas refrescantes bebidas, do café ao vinho.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              {bebidas.map((item, index) => (
                <div key={index} className="bg-white text-gray-800 p-4 rounded-lg shadow-md flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full">
                    {item.icone && <i className={`fas ${item.icone} text-2xl text-gray-600`}></i>}
                    {!item.icone && <i className="fas fa-mug-hot text-2xl text-gray-600"></i>}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-800">{item.nome}</h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.descricao}</p>
                    <span className="text-primary font-bold text-base">{item.preco}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}