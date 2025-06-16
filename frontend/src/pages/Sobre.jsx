// src/pages/Sobre.jsx
export default function Sobre() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Banner */}
        <section
          className="relative h-64 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/sobre-banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-4xl font-serif font-bold">Sobre Nós</h2>
          </div>
        </section>

        {/* História */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                Nossa História
              </h2>
              <div className="mb-12">
                <p className="mb-4">
                  O Palanca Negra Café, situado em Darque, Viana do Castelo, é um
                  espaço cheio de história e tradição, com 42 anos de vida a
                  servir a comunidade local e visitantes.
                </p>
                <p className="mb-4">
                  Desde a sua abertura, tornou-se um ponto de referência, conhecido pelo ambiente
                  acolhedor e pela variedade de delícias que oferece.
                </p>
                <p>
                  Os cachorros quentes e os bolos caseiros são apenas algumas das iguarias que fazem parte do seu legado
                  gastronómico.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <img
                    src="/images/sobre-1.jpg"
                    alt="Fundadores"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    Nossa Filosofia
                  </h3>
                  <p className="mb-4">
                    Acreditamos que comida de qualidade começa com ingredientes de
                    qualidade. Por isso, trabalhamos apenas com fornecedores
                    locais e selecionados.
                  </p>
                  <p>
                    Todos os nossos produtos são preparados na hora, com massa
                    preparada diariamente e recheios frescos.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="order-1 md:order-2">
                  <img
                    src="/images/sobre-2.jpg"
                    alt="Equipe"
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-serif font-bold mb-4">Nossa Equipe</h3>
                  <p className="mb-4">
                    Contamos com uma equipe de profissionais dedicados, desde os
                    chefs até nossos atendentes.
                  </p>
                  <p>
                    Todos passam por treinamento rigoroso para garantir que cada
                    produto que saia da nossa cozinha tenha o padrão de qualidade
                    Palanca Negra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Paixão</h3>
                <p>
                  Fazemos cada produto com amor e dedicação, como se fosse para
                  nossa própria família.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Qualidade</h3>
                <p>
                  Ingredientes frescos e selecionados, sem conservantes ou
                  aditivos desnecessários.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4 text-accent">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidade</h3>
                <p>
                  Acreditamos no comércio justo e no apoio aos produtores locais.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}