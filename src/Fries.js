import React, { useState } from "react";

import "./styles/OrderStyles.css";

const Fries = (props) => {

  return (
    <>
      {props.isVisibleFries && (
        <div className="container">
          <div className="order-background-color order-list">
            <div>
              <h3 className="mx-3 my-2">Fries</h3>
              <button
                type="button"
                className="ml-5 order-button btn btn-danger"
                onClick={props.subtractFriesQuantity}
              >
                -
              </button>

              <button
                className="order-button btn"
                style={{ border: "1px solid rgb(100,100,100" }}
              >
                {props.friesQuantity}
              </button>
              <button
                type="button"
                className="ml-5 order-button btn btn-success"
                onClick={props.addFriesQuantity}
              >
                +
              </button>
            </div>
            <div>SEK {(props.price * props.friesQuantity).toFixed(2)}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fries;
