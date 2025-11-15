import { useState } from 'react';

// REFACTOR: Add debouncing for search input
const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({
      name: name || undefined,
      category: category || undefined,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
    });
  };

  const handleReset = () => {
    setName('');
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
    onSearch({});
  };

  return (
    <form onSubmit={handleSearch} style={{ 
      backgroundColor: 'white', 
      padding: '30px', 
      borderRadius: '10px', 
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px'
    }}>
      <h3 style={{ marginBottom: '20px', color: '#8b4513', fontSize: '18px', fontWeight: '600' }}>
        🔍 Filter & Search
      </h3>
      
      <div className="grid grid-2" style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Filter by category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
        />
        <input
          type="number"
          placeholder="Min price..."
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="form-control"
          step="0.01"
        />
        <input
          type="number"
          placeholder="Max price..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="form-control"
          step="0.01"
        />
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          type="submit"
          className="btn btn-primary"
        >
          🔍 Search
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="btn btn-secondary"
        >
          ↺ Reset
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
