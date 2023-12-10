import React from "react";

import "./styles/OrderStyles.css";

const Burger = ({ isVisible, quantity, add, subtract, price }) => {
  console.log("add function", add);
  console.log("price", price, "quantity", quantity);

  return (
    <>
      {isVisible && (
        <div className="container">
          <div className="order-background-color order-list">
            <div>
              <h3 className="mx-3 my-2">Burger</h3>
              <button
                type="button"
                className="ml-5 order-button btn btn-danger"
                onClick={subtract}
              >
                -
              </button>
              <button
                className="order-button btn"
                style={{ border: "1px solid rgb(100,100,100" }}
              >
                {quantity}
              </button>
              <button
                type="button"
                className="ml-5 order-button btn btn-success"
                onClick={add}
              >
                +
              </button>
            </div>
            <div>SEK {price * quantity}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Burger;
