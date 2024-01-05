import React from "react";
import "./builder.css";

const Builder = (props) => {
  return (
    <div className="builder">
      <div></div>
      <div></div>
      <div>
        <p>Book Title : {props.title}</p>
        <p>Book Genre : {props.genre.map((item) => item + ", ")}</p>
        <p>Cost : ${props.price}</p>
      </div>
      <button
        onClick={() =>
          props.addProduct({
            id: props.id,
            bookName: props.title,
            price: props.price,
          })
        }
        className="btn"
      >
        Add Item
      </button>
      <div></div>
      <div></div>
    </div>
  );
};

export default Builder;
