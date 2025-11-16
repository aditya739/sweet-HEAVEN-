const FooterPastel = () => {
  return (
    <footer className="bg-pastel-cream border-t border-pastel-pink border-opacity-30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-pastel-pink rounded-full flex items-center justify-center text-white">🧁</div>
              <span className="font-bold text-gray-800">Sweet Heaven</span>
            </div>
            <p className="text-gray-600">Handcrafted sweets made with love</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-pastel-pink transition">Home</a></li>
              <li><a href="#" className="hover:text-pastel-pink transition">Shop</a></li>
              <li><a href="#" className="hover:text-pastel-pink transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:scale-110 transition">📘</a>
              <a href="#" className="hover:scale-110 transition">📷</a>
              <a href="#" className="hover:scale-110 transition">🐦</a>
            </div>
          </div>
        </div>
        <div className="border-t border-pastel-pink border-opacity-30 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Sweet Heaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPastel;
