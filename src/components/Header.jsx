import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/games', label: 'Games' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/web', label: 'Web' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="relative z-50 bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-600 shadow-lg">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-white text-2xl font-extrabold tracking-wider animate-pulse">
          MUGWANEZA
        </div>

        {/* Hamburger Button (visible on small screens) */}
        <button
          className="text-white md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links (mobile & desktop) */}
        <ul
          className={`fixed md:static top-0 left-0 w-full h-screen md:h-auto bg-indigo-950 md:bg-transparent flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center md:justify-end p-8 md:p-0 transition-all duration-300 z-40 ${isOpen ? "flex" : "hidden md:flex"
            }`}
        >
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ${isActive
                    ? "bg-black text-indigo-300 shadow-md"
                    : "hover:bg-white/10 hover:scale-105"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
