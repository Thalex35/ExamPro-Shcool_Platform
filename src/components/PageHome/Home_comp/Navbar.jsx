import "../Home_style/Navbar.css";
import {
  HiHome,
  HiBookOpen,
  HiFolder,
  HiChartBar,
  HiUserCircle,
} from "react-icons/hi";
import { PiGraduationCapBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logos">
        <Link className="logo" to="/">
          <PiGraduationCapBold className="text-x2" /> EXAMPRO
        </Link>
      </div>
      <div className="links">
        <Link className="link" to="/">
          <HiHome className="text-xl" />
          Accueil
        </Link>
        <Link className="link" to="/Matiere">
          <HiBookOpen className="text-xl" />
          Matieres
        </Link>
        <Link className="link" to="/Cours">
          <HiBookOpen className="text-xl" />
          Cours
        </Link>
        <Link className="link" to="/Ressources">
          <HiFolder className="text-xl" />
          Ressource
        </Link>
        <Link className="link" to="/Progression">
          <HiChartBar className="text-xl" />
          Progression
        </Link>
        <Link className="link" to="/Login">
          <HiUserCircle className="text-x3" />
        </Link>
      </div>
    </nav>
  );
}
