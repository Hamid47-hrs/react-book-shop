import React from "react";
import NavItems from "../navitems/NavItems";
import SearchBar from "../searchbar/SearchBar";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <header className="navbar">
      <nav>
        <NavItems navLink={props.navLink} />
        <SearchBar />
      </nav>
    </header>
  );
};

export default NavBar;
