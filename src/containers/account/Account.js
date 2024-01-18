import React from "react";
import "./Account.css";

const Account = (props) => {
  return (
    <div className="account">
      <h2>Account</h2>
      <div>{props.children}</div>
    </div>
  );
};

export default Account;
