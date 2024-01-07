import React from "react";
import "./NavItems.css";

const NavItems = (props) => {
  return (
    <div className="nav-items">
      <ul>
        {props.navLink.map((item, index) => {
          return (
            <li key={index}>
              <a href={Object.values(item)[0]}>{Object.keys(item)[0]}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItems;
