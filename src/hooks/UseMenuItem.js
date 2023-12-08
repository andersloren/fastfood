import { useState } from "react";

const UseMenuItem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setQuantity(0);

  };

  const addQuantity = (maxQuantity = 10) => {
    setQuantity((prevQuantity) =>
      prevQuantity < maxQuantity ? prevQuantity + 1 : maxQuantity
    );
  };

  const subtractQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  return {
    isVisible,
    quantity,
    toggleVisibility,
    addQuantity,
    subtractQuantity,
  };
};

export default UseMenuItem;
