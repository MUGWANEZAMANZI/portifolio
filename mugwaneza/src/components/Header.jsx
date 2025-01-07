import { Link} from 'react-router-dom'

const Header = () => {  
  return (
    <header>
        <nav>
            <ul className='flex space-x-4 bg-red-300 w-full justify-center p-0'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;