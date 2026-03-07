import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cours from "./pages/Cours/Cours.jsx";
import Examen from "./pages/Examen/Examen.jsx";
import Login from "./pages/Login/Login.jsx";
import Matiere from "./pages/Matiere/Matiere.jsx";
import Progression from "./pages/Progression/Progression.jsx";
import Ressources from "./pages/Ressources/Ressources.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cours" element={<Cours />} />
        <Route path="/Examen" element={<Examen />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Matiere" element={<Matiere />} />
        <Route path="/Progression" element={<Progression />} />
        <Route path="/Ressources" element={<Ressources />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
