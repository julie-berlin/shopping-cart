// ShoppingItem gets a product and creates the JSX markup for one item in the shopping cart.
import React from "react";
import { partial } from "ramda";
import "./ShoppingItem.css";

const ShoppingItem = ({ product, onRemoveClick }) => {

    return (
        <div className="shopping-cart-item">
            <h6>{product.name}</h6>
            <div>{product.quantity}</div>
            <div>${product.price}</div>
            <button onClick={partial(onRemoveClick, [product])}>
                Remove
            </button>
        </div>
    );
};

export default ShoppingItem;
