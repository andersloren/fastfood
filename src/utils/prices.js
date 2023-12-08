export const burgerPrice = 79.99;
export const pizzaPrice = 99.99;
export const friesPrice = 59.99;

export const calculateTotalPrice = (
  burgerQuantity,
  pizzaQuantity,
  friesQuantity
) => {
  return (
    (burgerPrice * burgerQuantity) +
    (pizzaPrice * pizzaQuantity) +
    (friesPrice * friesQuantity)
  ).toFixed(2);
};
