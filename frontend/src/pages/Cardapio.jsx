export default function Cardapio() {
  const salgados = [
    {
      nome: 'Pastel de Carne',
      descricao: 'Carne moída temperada com especiarias especiais e cebola',
      preco: 'R$ 8,50',
      imagem: '/images/pastel-carne.jpg'
    },
    {
      nome: 'Pastel de Queijo',
      descricao: 'Queijo derretido com um toque de orégano',
      preco: 'R$ 7,00',
      imagem: '/images/pastel-queijo.jpg'
    },
    {
      nome: 'Pastel de Frango',
      descricao: 'Frango desfiado com catupiry e milho',
      preco: 'R$ 9,00',
      imagem: '/images/pastel-frango.jpg'
    },
    {
      nome: 'Pastel de Calabresa',
      descricao: 'Calabresa com cebola e azeitonas',
      preco: 'R$ 8,00',
      imagem: '/images/pastel-calabresa.jpg'
    },
    {
      nome: 'Pastel de Palmito',
      descricao: 'Palmito pupunha com queijo branco',
      preco: 'R$ 9,50',
      imagem: '/images/pastel-palmito.jpg'
    },
    {
      nome: 'Pastel de Camarão',
      descricao: 'Camarão refogado com creme de leite',
      preco: 'R$ 12,00',
      imagem: '/images/pastel-camarao.jpg'
    }
  ];

  const doces = [
    {
      nome: 'Pastel de Nutella',
      descricao: 'Recheado com Nutella e morangos frescos',
      preco: 'R$ 10,00',
      imagem: '/images/pastel-nutella.jpg'
    },
    {
      nome: 'Pastel de Banana',
      descricao: 'Banana caramelizada com canela',
      preco: 'R$ 7,50',
      imagem: '/images/pastel-banana.jpg'
    },
    {
      nome: 'Romeu e Julieta',
      descricao: 'Queijo minas com goiabada',
      preco: 'R$ 8,00',
      imagem: '/images/pastel-romeu-julieta.jpg'
    }
  ];

  const bebidas = [
    {
      nome: 'Café Expresso',
      descricao: 'Café 100% arábica',
      preco: 'R$ 4,00',
      icone: 'fa-coffee'
    },
    {
      nome: 'Suco Natural',
      descricao: 'Laranja, abacaxi ou maracujá',
      preco: 'R$ 6,00',
      icone: 'fa-glass-whiskey'
    },
    {
      nome: 'Refrigerante',
      descricao: 'Lata 350ml',
      preco: 'R$ 5,00',
      icone: 'fa-wine-bottle'
    },
    {
      nome: 'Cerveja Artesanal',
      descricao: 'Garrafa 355ml',
      preco: 'R$ 12,00',
      icone: 'fa-beer'
    }
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Banner */}
        <section
          className="relative h-64 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cardapio-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-4xl font-serif font-bold">Nosso Cardápio</h2>
          </div>
        </section>

        {/* Cardápio Salgados */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Pastéis Salgados</h2>
              <p className="max-w-2xl mx-auto">
                Todos os nossos pastéis salgados são servidos com molho especial
                da casa
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

            {/* Doces */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Pastéis Doces</h2>
              <p className="max-w-2xl mx-auto">
                Deliciosas opções para quem prefere um sabor mais doce
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doces.map((item, index) => (
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

        {/* Bebidas */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Bebidas</h2>
              <p className="max-w-2xl mx-auto">
                Acompanhe seu pastel com nossas deliciosas bebidas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {bebidas.map((item, index) => (
                <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4 text-accent">
                    <i className={`fas ${item.icone}`}></i>
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