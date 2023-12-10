import React, { useState } from "react";

const Burger = ({ quantity, subtract }) => {
  const [quantityBurger, setQuantityBurger] = useState(0);

  // const addQuantityBurger = () => {
  //   setQuantityBurger(prevQuantity => {
  //     const newQuantity = prevQuantity < 10 ? prevQuantity + 1 : 10;
  //     console.log('New quantity:', newQuantity); // This should always be a number
  //     return newQuantity;
  //   });
  // };

  const addQuantityBurger = () => {
    setQuantityBurger(prevQuantity =>
      prevQuantity < 10 ? prevQuantity + 1 : 10
    );
  };
  
  console.log('add function:', addQuantityBurger);
  console.log('quantity', quantityBurger)

  return (
    <>
      <button type="button" onClick={subtract}>
        -
      </button>
        <div>Quantity: {quantityBurger}</div>
      <button type="button" onClick={addQuantityBurger}>
        +
      </button>
    </>
  );
};

export default Burger;
