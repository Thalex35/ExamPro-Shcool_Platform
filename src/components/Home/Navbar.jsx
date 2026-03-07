import "../Home_style/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/Home">EXAMPRO</Link>
      <Link to="/Home">Examen</Link>
      <Link to="/Matieres">Matieres</Link>
      <Link to="/Cours">Cours</Link>
      <Link to="/Ressource">Ressource</Link>
      <Link to="/Progression">Progression</Link>
      <Link to="/Login">Login</Link>
    </nav>
  );
}
