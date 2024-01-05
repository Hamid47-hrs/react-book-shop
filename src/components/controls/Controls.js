import React from "react";
import Builder from "./builder/Builder";
import "./controls.css";

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
            removeProduct={props.removeProduct}
          />
        );
      })}

      <div>
        <h2>Your Cart</h2>

        {props.cart.booksCart.length != 0 ? (
          props.cart.booksCart.map((item, index) => {
            return (
              <div key={index} className="cartItem">
                <div>
                  <span> {index + 1}. </span>
                  <span>{item.bookName}</span>
                </div>
                <div>
                  <span> : ${item.price}</span>
                </div>
                <div>
                  <span>Quantity: {item.quantity}</span>
                </div>
                <div></div>
                <button
                  onClick={() => props.removeProduct(item.id)}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            );
          })
        ) : (
          <p>There is no item in your cart.</p>
        )}

        <p>Total Price : ${props.cart.totalPrice}</p>
      </div>
    </div>
  );
};

export default Controls;
