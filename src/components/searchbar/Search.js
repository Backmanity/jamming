import React, { useState } from 'react';
import SearchResults from '../searchresults/SearchResults';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div>
            <form>
                <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

                <input type='submit' value='Search music'></input>
            </form>
            <SearchResults searchTerm={searchTerm}/>
        </div>
    );
};

export default SearchBar;