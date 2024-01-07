import React from "react";
import Builder from "./builder/Builder";
import "./Controls.css";

const Controls = (props) => {
  const products = [
    {
      id: 1,
      bookName: "Harry Potter",
      genre: ["action", "adventure"],
      price: 60,
    },
    {
      id: 2,
      bookName: "The Witcher",
      genre: ["action", "Fantasy"],
      price: 60,
    },
    {
      id: 3,
      bookName: "War & Peace",
      genre: ["Novel", "Historical"],
      price: 60,
    },
    {
      id: 4,
      bookName: "1001 Nights",
      genre: ["Fiction", "Frame Story"],
      price: 60,
    },
  ];

  return (
    <div className="controls">
      {products.map((item) => {
        return (
          <Builder
            key={item.id}
            id={item.id}
            title={item.bookName}
            genre={item.genre}
            price={item.price}
            addProduct={props.addProduct}
          />
        );
      })}

      <div>
        <button className="show-cart-btn" onClick={props.openModal}>
          Show Cart
        </button>
      </div>
    </div>
  );
};

export default Controls;
