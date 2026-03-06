import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBook, FiFolder, FiTrendingUp, FiAward, FiLogIn } from 'react-icons/fi';

const navLinks = [
  { to: '/',           label: 'Accueil',    icon: <FiHome /> },
  { to: '/matieres',   label: 'Matières',   icon: <FiBook /> },
  { to: '/ressources', label: 'Ressources', icon: <FiFolder /> },
  { to: '/progression',label: 'Progression',icon: <FiTrendingUp /> },
  { to: '/cours',      label: 'Cours',      icon: <FiBook /> },
  { to: '/examens',    label: 'Examens',    icon: <FiAward /> },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          🎓 EduPlatform
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-medium">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition
                  ${location.pathname === link.to
                    ? 'bg-white text-blue-700 font-bold'
                    : 'hover:bg-blue-600'}`}
              >
                {link.icon} {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login button */}
        <Link
          to="/login"
          className="flex items-center gap-1 bg-white text-blue-700 font-semibold px-4 py-1.5 rounded-full hover:bg-blue-50 transition text-sm"
        >
          <FiLogIn /> Connexion
        </Link>
      </div>
    </nav>
  );
}
