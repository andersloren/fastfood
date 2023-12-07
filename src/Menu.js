import React, { useEffect } from "react";

import "./styles/MenuStyles.css";

const Menu = (props) => {

  return (
    <div className="container mt-5">
      <h2 className={`menu-title ${props.isSwitchOn ? "light" : "dark"}`}>
        Fast Food Menu
      </h2>
      <div className="menu-row m-2 p-3 menu-background-color">
        <img className="card-img-top" src="./fast-food-dish-picture.png" />
        <h5 className="card-title my-1">Burger</h5>
        <div className="card-description my-1">
          A delicious burger with all the fixings
        </div>
        <div className="card-price my-1">SEK {props.burgerPrice}</div>
        <button type="button" className="btn btn-dark" onClick={props.toggleBurgerVisibility}>
          {props.isVisibleBurger ? "Remove from order" : "Add to order"}
        </button>
      </div>
      <div className="menu-row m-2 p-3 menu-background-color">
        <img className="card-img-top" src="./fast-food-dish-picture.png" />
        <h5 className="card-title my-1">Pizza</h5>
        <div className="card-description my-1">
          Classic pizza with your favorite toppings
        </div>
        <div className="card-price my-1">SEK {props.pizzaPrice}</div>
        <button type="button" className="btn btn-dark" onClick={props.togglePizzaVisibility}>
        {props.isVisiblePizza ? "Remove from order" : "Add to order"}
        </button>
      </div>
      <div className="menu-row m-2 p-3 menu-background-color">
        <img className="card-img-top" src="./fast-food-dish-picture.png" />
        <h5 className="card-title my-1">Fries</h5>
        <div className="card-description my-1">
          Crispy golden fries served hot and fresh
        </div>
        <div className="card-price my-1">SEK {props.friesPrice}</div>
        <button type="button" className="btn btn-dark" onClick={props.toggleFriesVisibility}>
        {props.isVisibleFries ? "Remove from order" : "Add to order"}
        </button>
      </div>
    </div>
  );
};

export default Menu;
