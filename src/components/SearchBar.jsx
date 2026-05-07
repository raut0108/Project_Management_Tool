import { useState } from 'react';

function SearchBar({ placeholder, onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  };

  const handleClear = () => {
    setValue('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      {value && (
        <button className="search-clear" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
