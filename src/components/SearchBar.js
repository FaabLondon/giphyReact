import React from 'react';

//Search component - functional component is enough
const SearchBar = ({ handleChange, handleSubmit, error }) => {
  return(
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="search">Search GIFs</label>
          <input onChange={handleChange} id="search" className="input" placeholder="Enter search" name="search" />
        </div>

        <div className="field">
          <label htmlFor="limit">Number of results</label>
          <input onChange={handleChange} id="limit" className="limit" placeholder="Nb of results (max 100)" name="limit" min="1" max="100" />
        </div>
        <p>{error}</p>

        <button>Search</button>
      </form>

      <label htmlFor="rating">Filter results by rating</label>
      <select name="rating" id="rating" onChange={handleChange} defaultValue="All">
        <option value="All">All</option>
        <option value="y">y</option>
        <option value="g">g</option>
        <option value="pg">pg</option>
        <option value="pg-13">pg-13</option>
        <option value="r">r</option>
      </select>

    </div>
  );
};


export default SearchBar;
