import React from "react";
import Wrapper from "../../hoc/Wrapper";
import NavBar from "../navigation/navbar/NavBar";

const Layout = (props) => {
  return (
    <Wrapper>
      <NavBar />
      <main>{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
