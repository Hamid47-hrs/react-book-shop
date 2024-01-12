import React from "react";
import Wrapper from "../../hoc/Wrapper";
import NavBar from "../navigation/navbar/NavBar";

const links = [
  { Home: "/" },
  { Store: "/store" },
  { Account: "/account" },
  { "About Me": "/about" },
  { "Hamid 47": "https://github.com/Hamid47-hrs" },
];

const Layout = (props) => {
  return (
    <Wrapper>
      <NavBar navLink={links} />
      <main>{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
