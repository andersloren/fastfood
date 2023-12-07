import React, { useEffect, useState } from "react";

import "./styles/MenuStyles.css";

const Menu = (props) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const dishes = [
      {
        title: "Burger",
        description: "A delicious burger with all the fixings",
        price: 79.99,
      },
      {
        title: "Pizza",
        description: "Classic pizza with your favorite toppings",
        price: 99.99,
      },
      {
        title: "Fries",
        description: "Crispy golden fries served hot and fresh",
        price: 59.99,
      },
    ];
    setMenu(dishes);
  }, []);

  return (
    <div className="container mt-5">
      <h2
        className={`menu-title ${
          props.isSwitchOn ? "light" : "dark"
        }`}
      >
        Fast Food Menu
      </h2>
      <div className="row">
        {menu.map((dish, index) => (
          <div className="card col-md-3 m-2 p-3" key={index}>
            <img
              className="card-img-top"
              src="./fast-food-dish-picture.png"
            />
            <h5 className="card-title my-1">{dish.title}</h5>
            <div className="card-description my-1">{dish.description}</div>
            <div className="card-price my-1">SEK {dish.price}</div>
            <button type="button" className="btn btn-dark">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
