/*
Mobx implementation
*/

import { observable, action } from "mobx";

// helper functions
const getProductQuantity = (shoppingCartMap, product) => {
  const existingProduct = shoppingCartMap.get(product.id); // changed
  if (existingProduct) {
    return existingProduct.quantity;
  }
  return 0;
};

const incrementProductQuantity = (shoppingCartMap, product) => {
  const quantity = getProductQuantity(shoppingCartMap, product) + 1;
  return Object.freeze({ ...product, quantity });
};

const toCartViewFromMap = shoppingCartMap => {
  const shoppingList = Array.from(shoppingCartMap.values());
  return Object.freeze({
    list: shoppingList,
    total: shoppingList.reduce(addPrice, 0)
  });
};

const addPrice = (totalPrice, line) => {
  return totalPrice + line.price * line.quantity;
};


// Export
const ShoppingCartStore = () => {
  const shoppingCartMap = observable.map();

  const toCartView = () => {
    return toCartViewFromMap(shoppingCartMap);
  };

  const addToCart = action(product => {
    shoppingCartMap.set(product.id, incrementProductQuantity(shoppingCartMap, product));
  });

  const removeFromCart = action(product => {
    shoppingCartMap.delete(product.id);
  });

  return Object.freeze({
    addToCart,
    removeFromCart,
    toCartView
  });
};

export default ShoppingCartStore;
