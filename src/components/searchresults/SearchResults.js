import React from 'react';

function SearchResults({searchTerm}) {
    return (
        <div>
            <p>Results</p>
            <p>{searchTerm}</p>
        </div>
    );
};

export default SearchResults;