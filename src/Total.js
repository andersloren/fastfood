import React from "react";

import "./styles/OrderStyles.css";
import {priceBurger, pricePizza, priceFries} from './utils/prices';

const Total = ( {quantityBurger, quantityPizza, quantityFries } ) => {

  const calculatetotalPrice = () => {
    const sum = quantityBurger*priceBurger +
    quantityPizza*pricePizza +
    quantityFries*priceFries;
    return sum;
  };

  const totalPrice = calculatetotalPrice();

  return (
    <div className="container">
      <div className="order-background-color order-list">
        <div>
          <h3 className="mx-3 my-2">
            <b>Total</b>
          </h3>
        </div>
        <div><b>SEK {totalPrice}</b></div>
      </div>
    </div>
  );
};

export default Total;
