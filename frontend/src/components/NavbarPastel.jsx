import { Link } from 'react-router-dom';

const NavbarPastel = ({ cartCount = 0 }) => {
  return (
    <nav className="bg-pastel-cream shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-pastel-pink rounded-full flex items-center justify-center text-white font-bold">
            🧁
          </div>
          <span className="text-xl font-bold text-gray-800">Sweet Heaven</span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-700 hover:text-pastel-pink transition">Home</Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-pastel-pink transition">Shop</Link>
          <a href="#" className="text-gray-700 hover:text-pastel-pink transition">Flavors</a>
          <a href="#" className="text-gray-700 hover:text-pastel-pink transition">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-pastel-pink transition">🔍</button>
          <Link to="/cart" className="relative text-gray-700 hover:text-pastel-pink transition">
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pastel-pink text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPastel;
