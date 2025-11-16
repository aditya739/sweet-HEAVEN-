const DailyDelightsPastel = () => {
  const items = [
    { id: 1, name: 'Cupcakes', emoji: '🧁', color: 'bg-pastel-pink' },
    { id: 2, name: 'Cookies', emoji: '🍪', color: 'bg-pastel-beige' },
    { id: 3, name: 'Donuts', emoji: '🍩', color: 'bg-pastel-mint' },
    { id: 4, name: 'Macarons', emoji: '🍮', color: 'bg-pastel-lavender' },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Daily Delights</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map(item => (
            <div key={item.id} className="flex flex-col items-center group cursor-pointer">
              <div className={`${item.color} w-40 h-40 rounded-full flex items-center justify-center text-6xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {item.emoji}
              </div>
              <p className="mt-4 text-lg font-semibold text-gray-800">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyDelightsPastel;
