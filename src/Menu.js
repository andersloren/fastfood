import React from "react";

import "./styles/MenuStyles.css";

import useMenuItem from "./hooks/useMenuItem";
import { priceBurger, pricePizza, priceFries } from "./utils/prices";
import Burger from "./Burger";
import Fries from "./Fries";
import Pizza from "./Pizza";
import Total from "./Total";
import YourOrder from "./YourOrder";
import TestBurger from "./TestBurger";

const Menu = ({ isSwitchOn }) => {
  const {
    toggleVisibilityBurger,
    toggleVisibilityPizza,
    toggleVisibilityFries,
    isVisibleBurger,
    isVisiblePizza,
    isVisibleFries,
    quantityBurger,
    quantityPizza,
    quantityFries,
    addQuantityBurger,
    addQuantityPizza,
    addQuantityFries,
    subtractQuantityBurger,
    subtractQuantityPizza,
    subtractQuantityFries,
  } = useMenuItem();

  return (
    <div className="container mt-5">
      <h2 className={`menu-title ${isSwitchOn ? "light" : "dark"}`}>
        Fast Food Menu
      </h2>
      <div className="menu-row m-2 p-3 menu-background-color">
        <img className="" src="./fast-food-dish-picture.png" />
        <h5 className="card-title my-1">Burger</h5>
        <div className="card-description my-1">
          A delicious burger with all the fixings
        </div>
        <div className="card-price my-1">SEK {priceBurger}</div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={toggleVisibilityBurger}
        >
          {isVisibleBurger ? "Remove from order" : "Add to order"}
        </button>
      </div>
      <div className="menu-row m-2 p-3 menu-background-color">
        <img className="" src="./fast-food-dish-picture.png" />
        <h5 className="card-title my-1">Pizza</h5>
        <div className="card-description my-1">
          Classic pizza with your favorite toppings
        </div>
        <div className="card-price my-1">SEK {pricePizza}</div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={toggleVisibilityPizza}
        >
          {isVisiblePizza ? "Remove from order" : "Add to order"}
        </button>
      </div>
      <div className="menu-row m-2 p-3 menu-background-color">
        <img className="" src="./fast-food-dish-picture.png" />
        <h5 className="card-title my-1">Fries</h5>
        <div className="card-description my-1">
          Crispy golden fries served hot and fresh
        </div>
        <div className="card-price my-1">SEK {priceFries}</div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={toggleVisibilityFries}
        >
          {isVisibleFries ? "Remove from order" : "Add to order"}
        </button>
      </div>
      <YourOrder isSwitchOn={isSwitchOn} />
      <Burger
        price={priceBurger}
        isVisible={isVisibleBurger}
        subtract={subtractQuantityBurger}
        add={addQuantityBurger}
        quantity={quantityBurger}
      />
      <Pizza
        price={pricePizza}
        isVisible={isVisiblePizza}
        subtract={subtractQuantityPizza}
        add={addQuantityPizza}
        quantity={quantityPizza}
      />
      <Fries
        price={priceFries}
        isVisible={isVisibleFries}
        subtract={subtractQuantityFries}
        add={addQuantityFries}
        quantity={quantityFries}
      />
      <Total
        priceBurger={priceBurger}
        pricePizza={pricePizza}
        priceFries={priceFries}
        quantityBurger={quantityBurger}
        quantityPizza={quantityPizza}
        quantityFries={quantityFries}
      />
      <TestBurger 
              subtract={subtractQuantityFries}
              add={addQuantityFries}
              quantity={quantityFries}/>
    </div>
  );
};

export default Menu;
