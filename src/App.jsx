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
        Matiere
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cours />} />
        <Route path="/" element={<Examen />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Matiere />} />
        <Route path="/" element={<Progression />} />
        <Route path="/" element={<Ressources />} />
      </Routes>
    </BrowserRouter>
  );
}
