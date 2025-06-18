// src/pages/Sobre.jsx
import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Nova Seção de Banner (substituindo a antiga) */}
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
            </div>
          </div>
        </section>

        {/* História - AGORA COM A MESMA LARGURA DO CONTEÚDO DO BANNER */}
        <section className="py-16 bg-white flex items-center justify-center"> {/* Adicione flexbox para centralizar o container */}
          <div className="container mx-auto"> {/* Mantém o container principal */}
            {/* Aplica os mesmos recuos e largura do conteúdo do banner */}
            <div className="px-4 md:px-0 md:w-[calc(100%-2rem)] md:mx-auto"> {/* Recua e centraliza o conteúdo */}
                <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                    Nossa História
                </h2>
                <div className="mb-12 text-justify">
                    <p className="mb-4">
                    No coração vibrante de Darque, uma pitoresca localidade em Viana do Castelo, ergue-se um verdadeiro tesouro da comunidade: o Palanca Negra Café. Com uma história rica que se estende por impressionantes 42 anos, este estabelecimento transcende a simples definição de um café; ele é, de facto, um pilar fundamental da comunidade local, um guardião zeloso de inúmeras memórias partilhadas e um ponto de encontro carismático que, ao longo de mais de quatro décadas, tem servido com inabalável paixão e dedicação tanto os residentes de Darque como os visitantes que por ali passam. A sua longevidade é um testemunho eloquente do carinho e da lealdade que conquistou.
                    </p>
                    <p className="mb-4">
                   Desde a sua inauguração, em meados do século passado, o Palanca Negra Café rapidamente se estabeleceu como um ponto de referência incontornável na região. Não demorou muito para que a sua reputação de excelência se espalhasse para além das fronteiras de Darque, atraindo uma clientela fiel de toda a Viana do Castelo e arredores. O ambiente, que sempre foi a sua alma e distintivo, é uma verdadeira ode à genuína hospitalidade portuguesa: um espaço caloroso, profundamente acolhedor e inegavelmente convidativo, impregnado de um charme nostálgico que imediatamente evoca a sensação reconfortante de estar em casa, longe das preocupações do dia a dia. É um lugar onde cada cliente se sente parte de algo maior, uma família alargada.
                    </p>
                    <p>
                    Contudo, aquilo que verdadeiramente distingue o Palanca Negra Café e o eleva a um patamar de eleição é, sem dúvida, a sua inigualável variedade e qualidade das delícias gastronómicas que oferece. Ao longo dos anos, uma miríade de iguarias passou a fazer parte intrínseca do seu rico legado culinário, mas algumas, em particular, destacam-se não só pela sua avassaladora popularidade, mas também pelo profundo carinho e afeição que inspiram em quem as prova. Os seus afamados cachorros quentes, por exemplo, são muito mais do que um simples petisco; eles representam uma verdadeira instituição local, um sabor que para muitos evoca as doces lembranças da infância e que, para todos, se apresenta como uma tentação absolutamente irrecusável. De igual modo célebres e apreciados são os seus bolos caseiros, meticulosamente confecionados a partir de receitas que se mantêm fiéis à tradição mais autêntica e que, em cada dentada, nos transportam para o doce aroma e o sabor genuíno da doçaria caseira, preparados com a mesma dedicação artesanal de antigamente.
                    </p>
                    <p>
                      Cada aromática chávena de café cuidadosamente servida, cada tentadora fatia de bolo artisticamente cortada e cada suculento cachorro quente preparado nas suas cozinhas do Palanca Negra Café carrega consigo uma parte indelével desta riquíssima e comovente história. É um legado vivo, um testemunho eloquente da profunda dedicação e do amor incondicional que os seus visionários fundadores, e posteriormente a zelosa equipa que hoje comanda o espaço, dedicam diariamente para manter viva e vibrante a essência singular de um lugar que, ao longo de mais de quatro décadas, se tornou uma parte orgânica e inseparável da própria identidade de Darque. Convidamo-lo, pois, a vir descobrir por si mesmo a magia intemporal e os sabores inesquecíveis desta gloriosa tradição de 42 anos que continua a encantar paladares e a criar novas memórias.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                    <img
                        src="/images/funders.jpg"
                        alt="Fundadores"
                        className="rounded-lg shadow-md w-full"
                    />
                    </div>
                    <div className="text-justify">
                    <h3 className="text-2xl font-serif font-bold mb-4">
                        A Essência do Palanca Negra Café
                    </h3>
                    <p className="mb-4">
                        No coração vibrante de Darque, uma pitoresca localidade aninhada em Viana do Castelo, ergue-se um verdadeiro tesouro da comunidade: o Palanca Negra Café. Este estabelecimento transcende a simples definição de um café, sendo, de facto, um pilar fundamental da comunidade local. Com uma história rica que se estende por impressionantes 42 anos, o Palanca Negra é um guardião zeloso de inúmeras memórias partilhadas e um ponto de encontro carismático que, ao longo de mais de quatro décadas, tem servido com inabalável paixão e dedicação tanto os residentes de Darque como os visitantes que por ali passam. A sua notável longevidade e a capacidade de se reinventar, mantendo a sua essência, são um testemunho eloquente do carinho e da lealdade que soube conquistar junto dos seus clientes.
                    </p>
                    <p>
                        Desde a sua inauguração, em meados do século passado, o Palanca Negra Café rapidamente se estabeleceu como um ponto de referência incontornável na região. Não demorou para que a sua reputação de excelência e o boca a boca se espalhassem para além das fronteiras de Darque, atraindo uma clientela fiel de toda a Viana do Castelo e arredores. O ambiente, que sempre foi a sua alma e distintivo, é uma verdadeira ode à genuína hospitalidade portuguesa: um espaço caloroso, profundamente acolhedor e inegavelmente convidativo, impregnado de um charme nostálgico que imediatamente evoca a sensação reconfortante de estar em casa. É um lugar onde cada cliente se sente parte de algo maior, uma família alargada, um refúgio onde o tempo parece abrandar.
                    </p>
                    <p>
                      Contudo, aquilo que verdadeiramente distingue o Palanca Negra Café e o eleva a um patamar de eleição é, sem dúvida, a sua inigualável variedade e qualidade das delícias gastronómicas que oferece. Ao longo dos anos, uma miríade de iguarias passou a fazer parte intrínseca do seu rico legado culinário, mas algumas, em particular, destacam-se não só pela sua avassaladora popularidade, mas também pelo profundo carinho e afeição que inspiram em quem as prova.
                    </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="order-1 md:order-2">
                    <img
                        src="/images/team.jpg"
                        alt="Equipe"
                        className="rounded-lg shadow-md w-full"
                    />
                    </div>
                    <div className="order-2 md:order-1  text-justify">
                    <h3 className="text-2xl font-serif font-bold mb-4">A Nossa Equipa, coração e Alma do Palanca Negra Café</h3>
                    <p className="mb-4">
                       No Palanca Negra Café, a excelência dos nossos produtos e a qualidade do serviço devem-se, acima de tudo, à nossa equipa dedicada. Contamos com um grupo de profissionais apaixonados, onde cada membro, desde os talentosos chefs que dominam a arte da culinária até aos atenciosos atendentes que o recebem com um sorriso, desempenha um papel crucial na criação da experiência Palanca Negra que tanto valoriza. Eles são o verdadeiro coração e alma do nosso estabelecimento, garantindo que a tradição e a inovação andem de mãos dadas, criando um ambiente onde a dedicação e o profissionalismo são a nossa assinatura.
                    </p>
                    <p>
                        Para assegurar que mantemos o nosso elevado padrão de qualidade, todos os elementos da nossa equipa passam por um treinamento rigoroso e contínuo. Este programa de formação abrangente garante que cada processo, cada ingrediente e cada técnica são executados com precisão e maestria. É através desta dedicação à perfeição que podemos garantir que cada produto que sai da nossa cozinha — seja um cachorro quente, uma pizza estaladiça ou um dos nossos bolos caseiros — ostenta, invariavelmente, o padrão de qualidade inconfundível do Palanca Negra. O nosso compromisso é oferecer-lhe sempre o melhor, e isso começa com uma equipa excecionalmente preparada e motivada, que se orgulha de cada iguaria que chega à sua mesa.
                    </p>
                    <p>
                      Acreditamos firmemente que o sucesso do Palanca Negra Café reside não só na qualidade dos nossos produtos, mas também no espírito de união e camaradagem que permeia toda a equipa. Trabalhamos em conjunto, com paixão e sincronia, para garantir que cada visita sua seja uma experiência memorável. É essa sinergia e o amor pelo que fazemos que se reflete em cada detalhe, desde o ambiente acolhedor até ao sabor inesquecível das nossas especialidades, fazendo do Palanca Negra um local onde a tradição encontra a excelência no serviço.
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