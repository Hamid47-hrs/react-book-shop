import React from "react";
import bookImage from "../../../assets/images/books.jpg";
import "./builder.css";

const Builder = (props) => {
  return (
    <div className="builder">
      <img src={bookImage} alt="Book Image" />
      <div>
        <p>Book Title : {props.title}</p>
        <p>Genre : {props.genre.map((item) => item + ", ")}</p>
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
    </div>
  );
};

export default Builder;
