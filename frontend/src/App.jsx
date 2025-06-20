import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import AdminMessages from './pages/AdminMessages';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/contato" element={<Contato />} />
        </Route>

        {/* Rotas de Autenticação sem Navbar e Footer padrão */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastrar" element={<RegisterPage />} />
        <Route path="/recuperar-senha" element={<ForgotPasswordPage />} />

        {/* Rota Protegida para Admin */}
        <Route
          path="/admin/messages"
          element={
            <ProtectedRoute>
              <AdminMessages />
            </ProtectedRoute>
          }
        />

        {/* Rota para caminhos não encontrados (404) */}
        <Route path="*" element={
          <div className="flex flex-col items-center justify-center min-h-screen text-2xl">
            <h1>404 - Página Não Encontrada</h1>
            <p className="mt-4 text-lg">A página que você está a procurar não existe.</p>
            <a href="/" className="mt-6 text-blue-600 hover:underline">Voltar para a Home</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;