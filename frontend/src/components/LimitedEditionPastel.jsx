const LimitedEditionPastel = () => {
  return (
    <section className="py-20 px-4 bg-pastel-cream">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-r from-pastel-pink to-pastel-lavender rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-widest">Limited Edition</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Berry Bliss Collection</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Discover our exclusive collection of berry-inspired sweets, available for a limited time only
          </p>
          <button className="bg-white text-pastel-pink px-8 py-3 rounded-full font-semibold hover:shadow-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedEditionPastel;
