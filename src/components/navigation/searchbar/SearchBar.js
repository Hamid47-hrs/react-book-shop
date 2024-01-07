import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="What are you looking for?" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
