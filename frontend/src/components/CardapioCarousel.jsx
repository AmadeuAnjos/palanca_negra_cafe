// src/components/CardapioCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 

// Função auxiliar para dividir o array de itens em "chunks" (páginas)
const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function CardapioCarousel({ title, description, items, isDrinks = false, sectionBgClass = "bg-gray-100", itemsPerPage }) {
  // Se itemsPerPage não for fornecido ou for inválido, use um padrão razoável (e.g., 9 itens por página)
  const effectiveItemsPerPage = itemsPerPage && itemsPerPage > 0 ? itemsPerPage : 9;

  // Divide todos os itens em páginas (chunks) com base no itemsPerPage
  const pagesOfItems = chunkArray(items, effectiveItemsPerPage);

  // Não renderiza o carrossel se não houver páginas ou itens
  if (!items || items.length === 0 || pagesOfItems.length === 0) {
    return null; // Ou um placeholder, se preferir
  }

  // Define se o loop do carrossel deve estar ativo
  // Para loop fazer sentido, precisa de ter mais do que 1 página
  const enableLoop = pagesOfItems.length > 1;

  return (
    <section className={`py-16 ${sectionBgClass} text-black`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">{title}</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            {description}
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1} // Apenas 1 slide (que é uma página de grelha) visível por vez
          spaceBetween={30} // Espaço entre as páginas do carrossel
          loop={enableLoop} // Loop apenas se houver mais de uma página
          autoplay={enableLoop ? { // Autoplay apenas se houver mais de uma página
            delay: 3500,
            disableOnInteraction: false,
          } : false}
          navigation={true} // Mostrar navegação (setas)
          pagination={{ clickable: true }} // Mostrar paginação (pontos)
          className="mySwiper"
          // Não precisamos de breakpoints complexos para slidesPerView aqui,
          // pois cada slide é uma PÁGINA de itens. A responsividade da grelha
          // está DENTRO de cada SwiperSlide.
        >
          {pagesOfItems.map((page, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              {/* Esta div é a sua GRElHA ORIGINAL, agora dentro de CADA SLIDE */}
              {/* As classes grid-cols-X e gap-Y definem a grelha para os itens NESTA PÁGINA */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {page.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4 h-full">
                    {item.image ? (
                      <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name || item.nome}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    ) : (
                      // Ajustando o tamanho do ícone para bebidas
                      <div className={`flex-shrink-0 flex items-center justify-center bg-gray-200 ${isDrinks ? 'w-16 h-16 rounded-full' : 'w-24 h-24 rounded-lg'}`}>
                        <i className={`fas ${item.icon || item.icone} ${isDrinks ? 'text-2xl' : 'text-4xl'} text-gray-400`}></i>
                      </div>
                    )}
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-800">{item.name || item.nome}</h3>
                      <p className="text-sm text-gray-600 mb-2 line-clamp-3">{item.description || item.descricao}</p>
                      <span className="text-primary font-bold text-base">{item.price || item.preco}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}