
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-end">
          <span className="text-gray-500 logo-robot text-xl font-bold">ROBOT</span>
          <span className="text-robot-blue logo-cleaner -ml-1">Cleaner</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-robot-blue text-sm transition-colors">
            Início
          </Link>
          <Link to="/sobre-nos" className="text-gray-700 hover:text-robot-blue text-sm transition-colors">
            Sobre nós
          </Link>
          <Link to="/avalie-nos" className="text-gray-700 hover:text-robot-blue text-sm transition-colors">
            Avalie-nos
          </Link>
          <Link to="/workshop" className="text-gray-700 hover:text-robot-blue text-sm transition-colors">
            Workshop
          </Link>
          <Link to="/loja" className="text-gray-700 hover:text-robot-blue text-sm transition-colors">
            Loja
          </Link>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 rounded-md py-1.5 pl-4 pr-10 text-sm w-40 focus:outline-none focus:ring-1 focus:ring-robot-blue"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
        
        <Link to="/entrar" className="bg-robot-blue text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-800 transition-colors">
          Entrar
        </Link>
        
        <Link to="/inscrever-se" className="border border-robot-blue text-robot-blue px-4 py-1.5 rounded-md text-sm hover:bg-blue-50 transition-colors">
          Inscrever-se
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
