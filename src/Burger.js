import React, { useState } from "react";

import "./styles/OrderStyles.css";

const Burger = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [buttonValue, setButtonValue] = useState(0);

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value > 10) {
      alert(
        "For quantites over 10 items, please call the restaurant and our staff will help you!"
      );
    } else {
      setButtonValue(e.target.value);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key == "Enter") {
      setIsEditing(false);
    }
  };

  const subtractButtonValue = () => {
    setButtonValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const addButtonValue = () => {
    if (buttonValue >= 10) {
      alert(
        "For quantites over 10, please call the restaurant and our staff will help you!"
      );
      setButtonValue(10);
    } else {
      setButtonValue(buttonValue + 1);
    }
  };

  return (
    <div className="container">
      <h2
        className={`mt-5 mb-3 order-title ${
          props.isSwitchOn ? "light" : "dark"
        }`}
      >
        Your Order
      </h2>
      <div className="order-background-color order-list">
        <h3 className="mx-3 my-2">Burger</h3>
        <button
          type="button"
          className="ml-5 order-button btn btn-danger"
          onClick={subtractButtonValue}
        >
          -
        </button>
        {isEditing ? (
          <input
            type="number"
            value={buttonValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            autoFocus
          />
        ) : (
          <button
            className="order-button btn"
            style={{ border: "1px solid rgb(100,100,100" }}
            onClick={handleButtonClick}
          >
            {buttonValue}
          </button>
        )}
        <button
          type="button"
          className="ml-5 order-button btn btn-success"
          onClick={addButtonValue}
        >
          +
        </button>
      </div>
      
    </div>
  );
};

export default Burger;
