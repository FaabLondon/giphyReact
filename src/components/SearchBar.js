import React from 'react';

//Search component - functional component is enough
const SearchBar = ({ handleChange, handleSubmit, handleChangeRating }) => {
  return(
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="search">Search</label>
          <input onChange={handleChange} id="search" className="input" placeholder="Enter search" name="search" />
          <label htmlFor="limit">Number of results</label>
          <input onChange={handleChange} id="limit" className="input" placeholder="Enter number of results - Max 100" name="limit" min="1" max="100" />
        </div>
        <button>Go!</button>
      </form>

      <label htmlFor="rating">Rating</label>
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
