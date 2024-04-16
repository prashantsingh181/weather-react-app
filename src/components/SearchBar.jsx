import React from "react";

const SearchBar = ({ searchValue, setSearchValue, handleSubmit }) => {
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search-value"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button>
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
