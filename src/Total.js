import React from "react";

import "./styles/OrderStyles.css";

const Total = (props) => {
  return (
    <div className="container">
      <div className="order-background-color order-list">
        <div>
          <h3 className="mx-3 my-2">
            <b>Total</b>
          </h3>
        </div>
        <div>SEK {props.totalPrice.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Total;
