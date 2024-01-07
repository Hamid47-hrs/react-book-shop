import React from "react";
import Wrapper from "../../../hoc/Wrapper";
import BackDrop from "../backdrop/BackDrop";
import "./Modal.css";

const Modal = (props) => {
  return (
    <Wrapper>
      <BackDrop showCart={props.showCart} closeModal={props.closeModal} />
      <div className="modal">{props.children}</div>
    </Wrapper>
  );
};

export default Modal;
