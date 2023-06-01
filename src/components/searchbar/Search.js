import React from 'react';

function SearchBar() {
    return (
        <form>
            <label for='search'></label>
            <input type='text' id='search' name='search'></input>

            <input type='submit' value='Search'></input>
        </form>
    );
};

export default SearchBar;