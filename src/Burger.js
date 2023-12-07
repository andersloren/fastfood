import React, { useState } from "react";

import "./styles/OrderStyles.css";

const Burger = (props) => {

  return (
    <>
      {props.isVisibleBurger && (
        <div className="container">
          <div className="order-background-color order-list">
            <div>
              <h3 className="mx-3 my-2">Burger</h3>
              <button
                type="button"
                className="ml-5 order-button btn btn-danger"
                onClick={props.subtractBurgerQuantity}
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
                onClick={props.addBurgerQuantity}
              >
                +
              </button>
            </div>
            <div>SEK {(props.burgerPrice * props.burgerQuantity).toFixed(2)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Burger;
