import React, { useState } from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/controls/Controls";
import Modal from "../../components/ui-element/modal/Modal";
import Cart from "../../components/cart/Cart";
import ApiInsctance from "../../orderAPI";
import Loading from "../../components/ui-element/loading/Loading";

const Shopping = () => {
  const [loading, setLoading] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState({
    booksCart: [],
    totalPrice: 0,
  });
  const orderData = {
    cart: cart,
    customer: {
      userId: 1,
      name: "hamid reza sadati",
      email: "hamid47.hrs@gmail.com",
      phoneNumber: "+989050551235",
      address: "Sharbati, Keshavarz Avenue, Sari, Mazandaran, Iran",
      postalCode: "4813795578",
      vipUser: true,
    },
  };

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
  };

  const sendOrderRequestHendler = () => {
    setLoading(true);

    ApiInsctance.post("/orders.json", orderData)
      .then((res) => {
        setCart({
          booksCart: [],
          totalPrice: 0,
        });
        setLoading(false);
        closeCartHandler();
      })
      .catch((err) => {
        setLoading(false);
        closeCartHandler();

        console.error(err);
      });
  };

  return (
    <Wrapper>
      <div>
        <Controls addProduct={addProductHandler} openModal={openCartHandler} />
      </div>
      <div>
        {showCart ? (
          <Modal showCart={showCart} closeModal={closeCartHandler}>
            {loading ? (
              <Loading />
            ) : (
              <Cart
                removeProduct={removeProductHandler}
                closeModal={closeCartHandler}
                sendOrder={sendOrderRequestHendler}
                cart={cart}
              />
            )}
          </Modal>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Shopping;
