import React, { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/controls/Controls";
import Modal from "../../components/ui-element/modal/Modal";
import Cart from "../../components/cart/Cart";

const Shopping = () => {
  const [cart, setCart] = useState({
    booksCart: [],
    totalPrice: 0,
  });

  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const addProductHandler = ({ id, bookName, price }) => {
    const cartItem = cart.booksCart.find((item) => item.id == id);
    const cartItemIndex = cart.booksCart.findIndex((item) => item.id == id);

    if (cartItem) {
      const newBook = { ...cartItem };
      newBook.quantity += 1;

      const newBooksCart = [...cart.booksCart];
      newBooksCart[cartItemIndex] = newBook;

      let newTotalPrice = 0;

      for (let i in newBooksCart) {
        newTotalPrice += newBooksCart[i].price * newBooksCart[i].quantity;
      }

      setCart({
        booksCart: newBooksCart,
        totalPrice: newTotalPrice,
      });
    } else {
      const newBooksCart = [...cart.booksCart];
      newBooksCart.push({
        id: id,
        bookName: bookName,
        price: price,
        quantity: 1,
      });

      let newTotalPrice = 0;

      for (let i in newBooksCart) {
        const newPrice = newBooksCart[i].price * newBooksCart[i].quantity;
        newTotalPrice += newPrice;
      }

      setCart({
        booksCart: newBooksCart,
        totalPrice: newTotalPrice,
      });
    }

    console.log(cart);
  };

  const removeProductHandler = (id) => {
    const cartItem = cart.booksCart.find((item) => item.id == id);
    const cartItemIndex = cart.booksCart.findIndex((item) => item.id == id);

    if (cartItem) {
      if (cartItem.quantity > 1) {
        const newBook = { ...cartItem };
        newBook.quantity -= 1;

        const newBooksCart = [...cart.booksCart];
        newBooksCart[cartItemIndex] = newBook;

        let newTotalPrice = 0;

        for (let i in newBooksCart) {
          newTotalPrice += newBooksCart[i].price * newBooksCart[i].quantity;
        }

        setCart({
          booksCart: newBooksCart,
          totalPrice: newTotalPrice,
        });
      } else if (cartItem.quantity == 1) {
        const newBooksCart = [...cart.booksCart];

        newBooksCart.splice(cartItemIndex, 1);

        let newTotalPrice = 0;

        for (let i in newBooksCart) {
          const newPrice = newBooksCart[i].price * newBooksCart[i].quantity;
          newTotalPrice += newPrice;
        }

        setCart({
          booksCart: newBooksCart,
          totalPrice: newTotalPrice,
        });
      }
    } else {
      alert("There is no Item in the cart.");
    }

    console.log(cart);
  };

  return (
    <Wrapper>
      <div>
        <Controls addProduct={addProductHandler} openModal={openCartHandler} />
      </div>
      <div>
        {showCart ? (
          <Modal showCart={showCart} closeModal={closeCartHandler}>
            <Cart
              removeProduct={removeProductHandler}
              closeModal={closeCartHandler}
              cart={cart}
            />
          </Modal>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Shopping;
