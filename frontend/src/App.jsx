import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Contato from './pages/Contato'
import Footer from './components/Footer'
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
}
