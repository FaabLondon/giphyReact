import React from 'react';

//Search component - functional component is enough
const SearchBar = ({ handleChange, handleSubmit, searchfield }) => {
  return(
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="search"></label>
          <input onChange={handleChange} id="search" value={searchfield} className="input" placeholder="Enter search" name="search" />
        </div>
        <button>Go!</button>
      </form>
    </div>
  );
};


export default SearchBar;
