import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-600 shadow-lg backdrop-blur-md">
      <nav className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-white text-2xl font-extrabold tracking-wider mb-2 md:mb-0 animate-pulse">
          MUGWANEZA
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
          {[
            { path: '/', label: 'Home' },
            { path: '/games', label: 'Games' },
            { path: '/cyber', label: 'Cyber' },
            { path: '/web', label: 'Web Dev' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `px-4 py-1 rounded-full text-white font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-black text-indigo-800 shadow-md'
                      : 'hover:bg-white/10 hover:scale-105'
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
