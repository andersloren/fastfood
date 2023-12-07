import React from "react";

const YourOrder = (props) => {
  return (
    <div className="container">
      <h2
        className={`mt-5 mb-3 order-title ${
          props.isSwitchOn ? "light" : "dark"
        }`}
      >
        Your Order
      </h2>
    </div>
  );
};

export default YourOrder;
