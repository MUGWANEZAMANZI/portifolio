import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-gradient-to-r from-purple-500 to-indigo-500 p-4 shadow-lg'>
      <nav className='container mx-auto'>
        <ul className='flex flex-col md:flex-row justify-between md:justify-center space-y-2 md:space-y-0 md:space-x-4'>
          <li className='mx-2 md:mr-auto'>
            <NavLink 
              to="/" 
              className='text-white px-4 py-1 rounded-md hover:bg-purple-700 transition duration-300'
              activeClassName='bg-purple-700'
            >
              MUGWANEZA
            </NavLink>
          </li>
          <li className='mx-2'>
            <NavLink 
              to="/games" 
              className='text-white px-4 py-1 rounded-md hover:bg-purple-700 transition duration-300'
              activeClassName='bg-purple-700'
            >
              Games
            </NavLink>
          </li>
          <li className='mx-2'>
            <NavLink 
              to="/cyber" 
              className='text-white px-4 py-1 rounded-md hover:bg-purple-700 transition duration-300'
              activeClassName='bg-purple-700'
            >
              Cyber
            </NavLink>
          </li>
          <li className='mx-2'>
            <NavLink 
              to="/web" 
              className='text-white px-4 py-1 rounded-md hover:bg-purple-700 transition duration-300'
              activeClassName='bg-purple-700'
            >
              Web Dev
            </NavLink>
          </li>
          <li className='mx-2'>
            <NavLink 
              to="/contact" 
              className='text-white px-4 py-1 rounded-md hover:bg-purple-700 transition duration-300'
              activeClassName='bg-purple-700'
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
