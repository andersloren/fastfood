import React, { useState } from "react";

import "./styles/AppStyles.css";

import Menu from "./Menu";
import Burger from "./Burger";
import Pizza from "./Pizza";
import Fries from "./Fries";
import YourOrder from "./YourOrder";
import Total from "./Total";
import UseMenuItem from "./hooks/UseMenuItem";
import {
  burgerPrice,
  pizzaPrice,
  friesPrice,
  calculateTotalPrice,
} from "./utils/prices";

const App = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [theme, setTheme] = useState("theme-light");
  const [backgroundColor, setSwitchColor] = useState("background-light");
  const [textColor, setTextColor] = useState("text-dark");

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
    if (!isSwitchOn) {
      setTheme("theme-dark");
      setTextColor("text-light");
      setSwitchColor("background-dark");
    } else {
      setTheme("theme-light");
      setTextColor("text-dark");
      setSwitchColor("background-light");
    }
  };

  // const [isVisibleBurger, setIsVisibleBurger] = useState(false);
  // const [isVisiblePizza, setIsVisiblePizza] = useState(false);
  // const [isVisibleFries, setIsVisibleFries] = useState(false);

  // const toggleBurgerVisibility = () => {
  //   setIsVisibleBurger(!isVisibleBurger);
  //   setBurgerQuantity(0);
  // };

  // const togglePizzaVisibility = () => {
  //   setIsVisiblePizza(!isVisiblePizza);
  //   setPizzaQuantity(0);
  // };

  // const toggleFriesVisibility = () => {
  //   setIsVisibleFries(!isVisibleFries);
  //   setFriesQuantity(0);
  // };

  // const [burgerQuantity, setBurgerQuantity] = useState(0);
  // const [pizzaQuantity, setPizzaQuantity] = useState(0);
  // const [friesQuantity, setFriesQuantity] = useState(0);

  // const subtractBurgerQuantity = () => {
  //   setBurgerQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  // };

  // const addBurgerQuantity = () => {
  //   if (burgerQuantity >= 10) {
  //     alert(
  //       "For quantites over 10, please call the restaurant and our staff will help you!"
  //     );
  //     setBurgerQuantity(10);
  //   } else {
  //     setBurgerQuantity(burgerQuantity + 1);
  //   }
  // };

  // const subtractPizzaQuantity = () => {
  //   setPizzaQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  // };

  // const addPizzaQuantity = () => {
  //   if (pizzaQuantity >= 10) {
  //     alert(
  //       "For quantites over 10, please call the restaurant and our staff will help you!"
  //     );
  //     setPizzaQuantity(10);
  //   } else {
  //     setPizzaQuantity(pizzaQuantity + 1);
  //   }
  // };

  // const subtractFriesQuantity = () => {
  //   setFriesQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  // };

  // const addFriesQuantity = () => {
  //   if (friesQuantity >= 10) {
  //     alert(
  //       "For quantites over 10, please call the restaurant and our staff will help you!"
  //     );
  //     setFriesQuantity(10);
  //   } else {
  //     setFriesQuantity(friesQuantity + 1);
  //   }
  // };

  const burger = UseMenuItem();
  const pizza = UseMenuItem();
  const fries = UseMenuItem();

  const totalPrice = calculateTotalPrice(
    burger.quantity,
    pizza.quantity,
    fries.quantity
  );

  return (
    <>
      <div className={`App ${theme}`}>
        <div
          className={`form-check form-switch slider switch-custom ${backgroundColor}`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={isSwitchOn}
            onChange={handleSwitchChange}
          />
          <label
            className={`form-check-label switch-custom ${textColor}`}
            htmlFor="flexSwitchCheckDefault"
          >
            {theme === "theme-light" ? "Bright Mode" : "Dark Mode"}
          </label>
        </div>
        <Menu
          isSwitchOn={isSwitchOn}
          burger={burger}
          pizza={pizza}
          fries={fries}
          burgerPrice={burgerPrice}
          pizzaPrice={pizzaPrice}
          friesPrice={friesPrice}
          isVisibleBurger={burger.isVisible}
          toggleBurgerVisibility={burger.toggleVisibility}
          isVisiblePizza={pizza.isVisible}
          togglePizzaVisibility={pizza.toggleVisibility}
          isVisibleFries={fries.isVisible}
          toggleFriesVisibility={fries.toggleVisibility}
        />
        <YourOrder isSwitchOn={isSwitchOn} />
        <Burger
          price={burgerPrice}
          isVisibleBurger={burger.isVisible}
          subtractBurgerQuantity={burger.subtractQuantity}
          addBurgerQuantity={burger.addQuantity}
          burgerQuantity={burger.quantity}
        />
        <Pizza
          price={pizzaPrice}
          isVisiblePizza={pizza.isVisible}
          subtractPizzaQuantity={pizza.subtractQuantity}
          addPizzaQuantity={pizza.addQuantity}
          pizzaQuantity={pizza.quantity}
        />
        <Fries
          price={friesPrice}
          isVisibleFries={fries.isVisible}
          subtractFriesQuantity={fries.subtractQuantity}
          addFriesQuantity={fries.addQuantity}
          friesQuantity={fries.quantity}
        />
        <Total totalPrice={totalPrice} />
      </div>
    </>
  );
};

export default App;
