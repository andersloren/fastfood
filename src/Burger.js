import React from "react";

import "./styles/OrderStyles.css";
import UseMenuItem from "./hooks/UseMenuItem";

const Burger = (props) => {

  const { isVisible, quantity, addQuantity, subtractQuantity } = UseMenuItem();

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
                onClick={subtractQuantity}
              >
                -
              </button>
              <button
                className="order-button btn"
                style={{ border: "1px solid rgb(100,100,100" }}
              >
                {props.burgerQuantity}
              </button>
              <button
                type="button"
                className="ml-5 order-button btn btn-success"
                onClick={addQuantity}
              >
                +
              </button>
            </div>
            <div>SEK {(props.price * quantity).toFixed(2)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Burger;
