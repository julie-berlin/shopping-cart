// ShoppingCart gets a cart item and creates the markup for it
// assigns the onRemoveClick callback to event

import React from "react";

import ShoppingItem from "./ShoppingItem";
import './ShoppingCart.css';

const ShoppingCart = ({ cart, onRemoveClick }) => {
  const renderShoppingItem = product => {
    return (
      <ShoppingItem
        key={product.id}
        product={product}
        onRemoveClick={onRemoveClick}
      />
    );
  };

  return (
    <div className="shopping-cart">
    <h3>Shopping Cart</h3>
      <div className="shopping-cart-list">{cart.list.map(renderShoppingItem)}</div>
      <div className="shopping-cart-total">Total: ${cart.total}</div>
    </div>
  );
};

export default ShoppingCart;
