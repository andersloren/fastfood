import React from "react";

import "./styles/OrderStyles.css";

const Order = (props) => {
  return (
    <div className="container">
      <h2
        className={`mt-5 mb-3 order-title ${
          props.isSwitchOn == false ? "dark" : "light"
        }`}
      >
        Your Order
      </h2>
      <div className="order-list">
        <div>Burger</div>
      </div>
    </div>
  );
};

export default Order;
