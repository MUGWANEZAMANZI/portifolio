import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4 bg-red-300 w-full justify-center p-2">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/games" 
              className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
            >
              Games
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/cyber" 
              className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
            >
              Cyber
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
