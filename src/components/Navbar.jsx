








import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white flex justify-between px-6 py-4 items-center shadow-md">
      <div className="text-2xl font-bold">ELB</div>
      <div className="space-x-6">
        <Link 
          to="/" 
          className="hover:underline hover:text-indigo-200 transition-colors"
        >
          Home
        </Link>
        <Link 
          to="/chat" 
          className="hover:underline hover:text-indigo-200 transition-colors"
        >
          Chat
        </Link>
        <Link 
          to="/about" 
          className="hover:underline hover:text-indigo-200 transition-colors"
        >
          About
        </Link>
        <Link 
          to="/contact" 
          className="hover:underline hover:text-indigo-200 transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;