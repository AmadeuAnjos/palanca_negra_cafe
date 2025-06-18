// src/pages/Cardapio.jsx
import React from 'react';

export default function Cardapio() {
  const highlights = [
    {
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
      image: '/images/sandefiambre.webp'
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
    }
  ];

  const salgados = [
    {
      nome: 'Pastel de Carne',
      descricao: 'Carne moída temperada com especiarias e cebola, frito na perfeição.',
      preco: '€ 2.50',
      imagem: '/images/pastel-carne.jpg'
    },
    {
      nome: 'Pastel de Queijo Fresco',
      descricao: 'Queijo derretido com um toque de orégãos, ideal para os amantes de queijo.',
      preco: '€ 2.00',
      imagem: '/images/pastel-queijo.jpg'
    },
    {
      nome: 'Pastel de Frango e Bacon',
      descricao: 'Frango desfiado com um toque cremoso e pedacinhos de bacon estaladiço.',
      preco: '€ 2.80',
      imagem: '/images/pastel-frango.jpg'
    },
    {
      nome: 'Rissol de Camarão',
      descricao: 'Delicioso rissol recheado com um cremoso e suculento refogado de camarão fresco.',
      preco: '€ 1.80',
      imagem: '/images/rissol-camarao.jpg'
    },
    {
      nome: 'Crocante de Alheira',
      descricao: 'Alheira de Mirandela envolvida em massa crocante, uma autêntica iguaria transmontana.',
      preco: '€ 2.20',
      imagem: '/images/alheira-crocante.jpg'
    },
    {
      nome: 'Folhado de Salsicha',
      descricao: 'Salsicha envolvida em massa folhada estaladiça, um snack rápido e saboroso.',
      preco: '€ 1.50',
      imagem: '/images/folhado-salsicha.jpg'
    }
  ];

  const pratosESnacks = [
    {
      nome: 'Prego no Pão',
      descricao: 'Tenra fatia de bife de vaca grelhado no ponto, servida no pão. Uma refeição simples e saborosa.',
      preco: '€ 5.00',
      imagem: '/images/prego.jpg'
    },
    {
      nome: 'Francesinha (Mini)',
      descricao: 'Uma versão reduzida da famosa sanduíche do Porto, com molho rico e picante, queijo derretido e batata frita.',
      preco: '€ 8.50',
      imagem: '/images/francesinha-mini.jpg'
    },
    {
      nome: 'Sopa do Dia',
      descricao: 'Sopa fresca preparada diariamente com os melhores ingredientes da época. Pergunte à nossa equipa pela sugestão de hoje!',
      preco: '€ 3.00',
      icone: 'fa-soup'
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
      image: '/images/tiramisu.png'
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
      price: '€ 2.90',
      image: '/images/toucinho-ceu.jpg'
    },
    {
      nome: 'Pudim Abade de Priscos',
      descricao: 'Um pudim tradicionalmente português, rico e cremoso, com um toque de vinho do Porto e toucinho. Para os mais audazes!',
      price: '€ 3.80',
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
      <main className="flex-grow">
        {/* Banner */}
        <section className="flex items-center justify-center">
          <div className="container mx-auto">
            <div
              className="relative h-96 px-4 flex items-center justify-center overflow-hidden"
            >
              <img
                src="/images/banner.jpg"
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
                  O Nosso Cardápio
                </h2>
                <p className="text-2xl mb-8">Sabores que Apaixonam!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques (Highlights) */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Os Nossos Destaques</h2>
              <p className="max-w-2xl mx-auto">
                Uma seleção especial dos nossos favoritos e mais procurados.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="h-48 mb-4 overflow-hidden rounded-lg">
                    {/* AQUI ESTÁ A MUDANÇA PRINCIPAL PARA object-contain */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-full h-full ${
                        (item.name === 'Bifana no Pão') // Apenas para a Bifana
                          ? 'object-contain' // Adiciona object-contain para a bifana
                          : 'object-cover' // Mantém object-cover para as outras
                      } rounded-lg ${
                        (item.name === 'Bifana no Pão' || item.name === 'Sandes de Fiambre')
                          ? 'border-2 border-primary'
                          : ''
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="mb-4 text-gray-600">{item.description}</p>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                  {/* Você pode adicionar um botão "Pedir" aqui se desejar */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cardápio Salgados */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Pastéis e Salgados Tradicionais</h2>
              <p className="max-w-2xl mx-auto">
                Todos os nossos salgados são preparados com ingredientes frescos e servidos com molho especial da casa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {salgados.map((item, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg shadow-md">
                  <div className="h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.nome}</h3>
                  <p className="mb-4 text-gray-600">{item.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{item.preco}</span>
                    <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition">
                      Pedir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pratos e Snacks Portugueses */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Pratos e Snacks Portugueses</h2>
              <p className="max-w-2xl mx-auto">
                Descubra os sabores autênticos de Portugal, perfeitos para uma refeição rápida ou um lanche reforçado.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pratosESnacks.map((item, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg shadow-md">
                  {item.imagem ? (
                    <div className="h-48 mb-4 overflow-hidden rounded-lg">
                      <img
                        src={item.imagem}
                        alt={item.nome}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 mb-4 flex items-center justify-center bg-gray-200 rounded-lg">
                      <i className={`fas ${item.icone} text-6xl text-gray-400`}></i>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{item.nome}</h3>
                  <p className="mb-4 text-gray-600">{item.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{item.preco}</span>
                    <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition">
                      Pedir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doces e Sobremesas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Doces e Sobremesas Tradicionais</h2>
              <p className="max-w-2xl mx-auto">
                Deliciosas opções para satisfazer o seu desejo por um sabor mais doce, desde clássicos portugueses a favoritos internacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doces.map((item, index) => (
                <div key={index} className="bg-secondary p-6 rounded-lg shadow-md">
                  <div className="h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.nome}</h3>
                  <p className="mb-4 text-gray-600">{item.descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold text-lg">{item.preco}</span>
                    <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition">
                      Pedir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bebidas */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Nossas Bebidas</h2>
              <p className="max-w-2xl mx-auto text-gray-200">
                Acompanhe o seu momento no Palanca Negra com as nossas refrescantes bebidas, do café ao vinho.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bebidas.map((item, index) => (
                <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4 text-accent">
                    {item.icone && <i className={`fas ${item.icone}`}></i>}
                    {!item.icone && <i className="fas fa-mug-hot"></i>}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.nome}</h3>
                  <p className="mb-4">{item.descricao}</p>
                  <span className="text-primary font-bold text-lg">{item.preco}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}