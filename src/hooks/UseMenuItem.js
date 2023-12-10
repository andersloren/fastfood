import { useState } from "react";

const UseMenuItem = () => {
  const [isVisibleBurger, setIsVisibleBurger] = useState(false);
  const [isVisiblePizza, setIsVisiblePizza] = useState(false);
  const [isVisibleFries, setIsVisibleFries] = useState(false);
  const [quantityBurger, setQuantityBurger] = useState(0);
  const [quantityPizza, setQuantityPizza] = useState(0);
  const [quantityFries, setQuantityFries] = useState(0);

  const toggleVisibilityBurger = () => {
    setIsVisibleBurger(!isVisibleBurger);
    setQuantityBurger(0);
  };
  const toggleVisibilityPizza = () => {
    setIsVisiblePizza(!isVisiblePizza);
    setQuantityPizza(0);
  };
  const toggleVisibilityFries = () => {
    setIsVisibleFries(!isVisibleFries);
    setQuantityFries(0);
  };

  const addQuantityBurger = () => {
      setQuantityBurger(prevQuantity =>
        prevQuantity < 10 ? prevQuantity + 1 : 10
      );
    };
  
  const addQuantityPizza = () => {
    setQuantityPizza((prevQuantity) =>
      prevQuantity < 10 ? prevQuantity + 1 : 10
    );
  };
  const addQuantityFries = () => {
    setQuantityFries((prevQuantity) =>
      prevQuantity < 10 ? prevQuantity + 1 : 10
    );
  };

  const subtractQuantityBurger = () => {
    setQuantityBurger((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };  
  const subtractQuantityPizza = () => {
    setQuantityPizza((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const subtractQuantityFries = () => {
    setQuantityFries((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return {
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
  };
};

export default UseMenuItem;
