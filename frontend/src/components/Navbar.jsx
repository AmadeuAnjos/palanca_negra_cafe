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
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="relative flex items-center w-full">
          <img src="/src/assets/images/logo.png" alt="Logotipo" className="h-16 mr-4 z-10" />
          <h1 className="absolute left-1/2 -translate-x-1/2 font-cookie font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:static sm:translate-x-0">
            Palanca Negra Café
          </h1>
        </div>

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
        
        <button 
          className="md:hidden text-2xl" 
          onClick={toggleMobileMenu}
          aria-label="Menu mobile"
        >
          <i className="fas fa-bars"></i>
        </button>
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