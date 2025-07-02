// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Menu', path: '/cardapio' },
    { name: 'Contactos', path: '/contato' }
  ];

  return (
    <header className="bg-primary text-black shadow-md">
      <div className="container mx-auto px-4 py-2 
        relative
        grid grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] items-center gap-4
        md:flex md:justify-between md:items-center"> 

        <div className="
          flex items-center
          flex-shrink-0
        ">
          <Link
          to="/">
          <img src="/images/logo.png" alt="Logotipo" className="h-16 mr-4 z-20" />
          </Link>
          
          <h1 className="
            font-cookie font-bold 
            text-xl sm:text-2xl md:text-3xl lg:text-3xl
            whitespace-nowrap truncate 
            z-10 
            w-auto 
            px-2
            py-2
            absolute left-1/2 -translate-x-1/2 
            md:static md:translate-x-0 md:text-left
            tracking-tighter
          ">
            Palanca Negra Café
          </h1>
        </div>

        <button 
          className={`
            md:hidden  
            text-2xl             
            ${mobileMenuOpen ? 'text-black' : 'text-white'} 
            bg-transparent      
            border-none          
            p-0            
            focus:outline-none focus:ring-2 focus:ring-accent
            transition-colors duration-300
            cursor-pointer
            justify-self-end
            z-20
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
                <Link to={item.path} className="hover:text-white font-medium">
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