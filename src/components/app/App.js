import './App.css';
import React, { useState } from 'react';
import SearchBar from '../searchbar/Search';
import SearchResults from '../searchresults/SearchResults';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
    </div>
  );
};

export default App;
