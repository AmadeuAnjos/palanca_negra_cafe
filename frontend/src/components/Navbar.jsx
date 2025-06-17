// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Cardápio', path: '/cardapio' },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <header className="bg-primary text-black shadow-md">
      {/* Container Principal do Navbar */}
      {/* ATENÇÃO AQUI: Grid APENAS para mobile, Flexbox para desktop */}
      <div className="container mx-auto px-4 py-2 
        relative /* Necessário para o H1 absoluto no mobile */
        grid grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] items-center gap-4 /* Grid para mobile */
        md:flex md:justify-between md:items-center"> {/* Em md e acima, volta para flexbox */}

        {/* Div Agrupador do Logo (para desktop) */}
        {/* No mobile, o logo ocupa sua própria coluna no grid. */}
        {/* No desktop, este div se torna flex para agrupar o logo e o H1. */}
        <div className="
          flex items-center /* Em desktop, alinha logo e H1 */
          flex-shrink-0 /* Evita que este grupo encolha em desktop */
        ">
          <img src="/images/logo.png" alt="Logotipo" className="h-16 mr-4 z-20" /> {/* mr-4 de volta aqui para desktop */}
          
          {/* H1 (Nome do Café) - Mudanças APENAS para o mobile */}
          <h1 className="
            font-cookie font-bold 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl 
            whitespace-nowrap truncate 
            z-10 
            w-auto 
            px-2 
            
            /* Classes de POSICIONAMENTO para mobile */
            absolute left-1/2 -translate-x-1/2 

            /* Classes que ANULAM o posicionamento absoluto APENAS em desktop */
            md:static md:translate-x-0 md:text-left /* Reverte para fluxo normal em desktop */
          ">
            Palanca Negra Café
          </h1>
        </div>

        {/* Botão do Menu Mobile (ícone de hambúrguer) - Estilo corrigido */}
        <button 
          className={`
            md:hidden             /* Esconde em telas maiores */
            text-2xl              /* Tamanho do ícone */
            ${mobileMenuOpen ? 'text-black' : 'text-white'} /* Cor condicional: preto se aberto, branco se fechado */
            bg-transparent        /* Remove qualquer fundo padrão do botão */
            border-none           /* Remove qualquer borda padrão */
            p-0                   /* Remove qualquer padding padrão do botão */
            focus:outline-none focus:ring-2 focus:ring-accent /* Estilo de foco para acessibilidade */
            transition-colors duration-300 /* Transição suave da cor */
            cursor-pointer        /* Indica que é clicável */
            justify-self-end /* Alinha à direita na sua célula grid (mobile) */
            z-20 /* Garante que fique por cima do H1 */
          `} 
          onClick={toggleMobileMenu}
          aria-label="Menu mobile"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-accent font-medium">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary py-4">
          <ul className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="hover:text-accent font-medium"
                  onClick={() => setMobileMenuOpen(false)} 
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}