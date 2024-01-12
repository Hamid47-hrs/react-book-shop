import React from "react";
import "./NavItems.css";
import { Link } from "react-router-dom";
import icon from "../../../assets/images/logo.png";
import githubIcon from "../../../assets/images/github.svg";

const NavItems = (props) => {
  return (
    <div className="nav-items">
      <img src={icon} alt="Home Icon"/>
      <ul>
        {props.navLink.map((item, index) => {
          return (
            <li key={index}>
              {Object.values(item)[0].includes("github.com") ? (
                <Link to={Object.values(item)[0]} className="github-icon">
                  <img src={githubIcon} alt="Github Icon" />
                  <span>{Object.keys(item)[0]}</span>
                </Link>
              ) : (
                <Link to={Object.values(item)[0]}>{Object.keys(item)[0]}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavItems;
