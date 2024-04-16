import React from "react";

const SearchBar = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search-value"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button>
        <i className="bi bi-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
