import React, { useState } from 'react';

function SearchBar( {onSearch} ) {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(inputValue);
        setInputValue('');
      };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Search:
                <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>    
    );
};

export default SearchBar;