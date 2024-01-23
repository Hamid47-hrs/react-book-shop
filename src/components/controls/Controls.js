import React, { useState, useEffect } from "react";
import Builder from "./builder/Builder";
import ApiInsctance from "../../orderAPI";
import Loading from "../ui-element/loading/Loading";
import "./Controls.css";
import Button from "../ui-element/button/Button";

const Controls = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiInsctance.get("/products.json")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="control-container">
      <div className="controls">
        {loading ? (
          <Loading />
        ) : error ? (
          <div className="netError">
            <h1>{error}</h1>
            <p>Please Check your internet connection and try again.</p>
          </div>
        ) : (
          products.map((item) => {
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
          })
        )}
      </div>
      <div className="cart-button">
        <Button type="show-cart" click={props.openModal}>
          Show Cart
        </Button>
      </div>
    </div>
  );
};

export default Controls;
