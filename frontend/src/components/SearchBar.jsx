import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ companies, setFilteredCompanies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    filterCompanies(value);
  };

  const filterCompanies = (value) => {
    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCompanies(filtered);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher une entreprise..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
