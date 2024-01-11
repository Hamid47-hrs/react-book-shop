import React, { useState, useEffect } from "react";
import Builder from "./builder/Builder";
import ApiInsctance from "../../orderAPI";
import Loading from "../ui-element/loading/Loading";
import "./Controls.css";

const Controls = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiInsctance.get("/products.json")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="controls">
      {loading ? (
        <Loading />
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

      <div>
        <button className="show-cart-btn" onClick={props.openModal}>
          Show Cart
        </button>
      </div>
    </div>
  );
};

export default Controls;
