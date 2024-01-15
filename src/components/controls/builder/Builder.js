import React from "react";
import bookImage from "../../../assets/images/books.jpg";
import "./builder.css";
import Button from "../../ui-element/button/Button";

const Builder = (props) => {
  return (
    <div className="builder">
      <img src={bookImage} alt="Book Image" />
      <div>
        <p>Book Title : {props.title}</p>
        <p>Genre : {props.genre.map((item) => item + ", ")}</p>
        <p>Cost : ${props.price}</p>
      </div>
      <Button
        type="add-element"
        click={() =>
          props.addProduct({
            id: props.id,
            bookName: props.title,
            price: props.price,
          })
        }
      >
        Add Item
      </Button>
    </div>
  );
};

export default Builder;
