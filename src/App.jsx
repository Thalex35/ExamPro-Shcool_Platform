import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home        from './pages/Home/Home';
import Matiere     from './pages/Matiere/Matiere';
import Ressources  from './pages/Ressources/Ressources';
import Progression from './pages/Progression/Progression';
import Login       from './pages/Login/Login';
import Cours       from './pages/Cours/Cours';
import Examen      from './pages/Examen/Examen';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/matieres" element={<Layout><Matiere /></Layout>} />
        <Route path="/ressources" element={<Layout><Ressources /></Layout>} />
        <Route path="/progression" element={<Layout><Progression /></Layout>} />
        <Route path="/cours" element={<Layout><Cours /></Layout>} />
        <Route path="/examens" element={<Layout><Examen /></Layout>} />
        <Route path="*" element={
          <Layout>
            <div className="text-center py-20">
              <h1 className="text-5xl font-bold text-blue-700">404</h1>
              <p className="text-gray-500 mt-4">Page non trouvée</p>
            </div>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
