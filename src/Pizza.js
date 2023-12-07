import React, { useState } from "react";

import "./styles/OrderStyles.css";

const Pizza = (props) => {

  return (
    <>
      {props.isVisiblePizza && (
        <div className="container">
          <div className="order-background-color order-list">
            <div>
              <h3 className="mx-3 my-2">Pizza</h3>
              <button
                type="button"
                className="ml-5 order-button btn btn-danger"
                onClick={props.subtractPizzaQuantity}
              >
                -
              </button>

              <button
                className="order-button btn"
                style={{ border: "1px solid rgb(100,100,100" }}
              >
                {props.pizzaQuantity}
              </button>
              <button
                type="button"
                className="ml-5 order-button btn btn-success"
                onClick={props.addPizzaQuantity}
              >
                +
              </button>
            </div>
            <div>SEK {(props.pizzaPrice * props.pizzaQuantity).toFixed(2)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pizza;
