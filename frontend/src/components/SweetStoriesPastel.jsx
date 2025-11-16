const SweetStoriesPastel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah',
      text: 'The best sweets I\'ve ever tasted! Absolutely delicious and beautifully packaged.',
      emoji: '👩'
    },
    {
      id: 2,
      name: 'Emma',
      text: 'Perfect for every occasion. The quality and taste are unmatched!',
      emoji: '👧'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Sweet Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map(item => (
            <div key={item.id} className="bg-pastel-cream rounded-2xl p-8 border-2 border-pastel-pink border-opacity-30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              </div>
              <p className="text-gray-600 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SweetStoriesPastel;
