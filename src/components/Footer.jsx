
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      
        <p className="text-center">&copy; {new Date().getFullYear()} MUGWANEZA MANZI Audace. All rights reserved.</p>
        
        <div className="text-center">
          <a href="https://github.com/MUGWANEZAMANZI" className="mx-2 text-gray-400 hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/mugwaneza-manzi-audace-b404671a6/" className="mx-2 text-gray-400 hover:text-white">LinkedIn</a>
          <a href="mailto:mmaudace@example.com" className="mx-2 text-gray-400 hover:text-white">Email</a>
        </div>
    </footer>
  );
};

export default Footer;