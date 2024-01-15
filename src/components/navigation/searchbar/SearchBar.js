import React from "react";
import "./SearchBar.css";
import Button from "../../ui-element/button/Button";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="What are you looking for?" />
      <Button type="search-btn">Search</Button>
    </div>
  );
};

export default SearchBar;
