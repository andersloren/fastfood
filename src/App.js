import React, { useState } from "react";

import "./styles/AppStyles.css";

import Menu from "./Menu";
import Burger from "./Burger";
import Pizza from "./Pizza";
import Fries from "./Fries";
import YourOrder from "./YourOrder";
import Total from "./Total";

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

  const [isVisibleBurger, setIsVisibleBurger] = useState(false);
  const [isVisiblePizza, setIsVisiblePizza] = useState(false);
  const [isVisibleFries, setIsVisibleFries] = useState(false);

  const toggleBurgerVisibility = () => {
    setIsVisibleBurger(!isVisibleBurger);
  };

  const togglePizzaVisibility = () => {
    setIsVisiblePizza(!isVisiblePizza);
  };

  const toggleFriesVisibility = () => {
    setIsVisibleFries(!isVisibleFries);
  };

  const [burgerQuantity, setBurgerQuantity] = useState(0);
  const [pizzaQuantity, setPizzaQuantity] = useState(0);
  const [friesQuantity, setFriesQuantity] = useState(0);

  const subtractBurgerQuantity = () => {
    setBurgerQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const addBurgerQuantity = () => {
    if (burgerQuantity >= 10) {
      alert(
        "For quantites over 10, please call the restaurant and our staff will help you!"
      );
      setBurgerQuantity(10);
    } else {
      setBurgerQuantity(burgerQuantity + 1);
    }
  };

  const subtractPizzaQuantity = () => {
    setPizzaQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const addPizzaQuantity = () => {
    if (pizzaQuantity >= 10) {
      alert(
        "For quantites over 10, please call the restaurant and our staff will help you!"
      );
      setPizzaQuantity(10);
    } else {
      setPizzaQuantity(pizzaQuantity + 1);
    }
  };

  const subtractFriesQuantity = () => {
    setFriesQuantity((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const addFriesQuantity = () => {
    if (friesQuantity >= 10) {
      alert(
        "For quantites over 10, please call the restaurant and our staff will help you!"
      );
      setFriesQuantity(10);
    } else {
      setFriesQuantity(friesQuantity + 1);
    }
  };

  const burgerPrice = 79.99;
  const pizzaPrice = 99.99;
  const friesPrice = 59.99;

  const totalPrice = () => (
    burgerPrice*burgerQuantity + pizzaPrice*pizzaQuantity + friesPrice*friesQuantity
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
          burgerPrice={burgerPrice}
          isVisibleBurger={isVisibleBurger}
          toggleBurgerVisibility={toggleBurgerVisibility}
          pizzaPrice={pizzaPrice}
          isVisiblePizza={isVisiblePizza}
          togglePizzaVisibility={togglePizzaVisibility}
          friesPrice={friesPrice}
          isVisibleFries={isVisibleFries}
          toggleFriesVisibility={toggleFriesVisibility}
        />
        <YourOrder isSwitchOn={isSwitchOn} />
        <Burger
          burgerPrice={burgerPrice}
          isVisibleBurger={isVisibleBurger}
          subtractBurgerQuantity={subtractBurgerQuantity}
          addBurgerQuantity={addBurgerQuantity}
          burgerQuantity={burgerQuantity}
        />
        <Pizza
          pizzaPrice={pizzaPrice}
          isVisiblePizza={isVisiblePizza}
          subtractPizzaQuantity={subtractPizzaQuantity}
          addPizzaQuantity={addPizzaQuantity}
          pizzaQuantity={pizzaQuantity}
        />
        <Fries
          friesPrice={friesPrice}
          isVisibleFries={isVisibleFries}
          subtractFriesQuantity={subtractFriesQuantity}
          addFriesQuantity={addFriesQuantity}
          friesQuantity={friesQuantity}
        />
        <Total totalPrice={totalPrice()}/>
      </div>
    </>
  );
};

export default App;
