import React from "react";
import "./BackDrop.css";

const BackDrop = (props) => {
  return <div className="back-drop" onClick={props.closeModal}></div>;
};

export default BackDrop;
