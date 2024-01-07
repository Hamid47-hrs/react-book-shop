import React from "react";
import Button from "../ui-element/button/Button";

const Cart = (props) => {
  return (
    <div>
      <h2>Your Cart</h2>

      {props.cart.booksCart.length != 0 ? (
        props.cart.booksCart.map((item, index) => {
          return (
            <>
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
            </>
          );
        })
      ) : (
        <p>There is no item in your cart.</p>
      )}
      <div>
        <p>Total Price : ${props.cart.totalPrice}</p>
        <p>Do you want to Continue?</p>
        <Button btnType="success">Yes</Button>
        <Button btnType="danger" clickAction={props.closeModal}>
          No
        </Button>
      </div>
    </div>
  );
};

export default Cart;
