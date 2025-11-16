import { Link } from 'react-router-dom';

const HeroPastel = () => {
  return (
    <section className="bg-gradient-to-r from-pastel-cream to-pastel-pink py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Life's Sweeter With Us
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Indulge in our handcrafted collection of premium sweets and treats
          </p>
          <Link to="/dashboard" className="inline-block bg-pastel-pink text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Discover Treats
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-pastel-mint rounded-full flex items-center justify-center text-8xl shadow-lg">
            🍩
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPastel;
