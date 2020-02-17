import React from "react";
import { partial } from "ramda";
import "./ProductItem.css";


const ProductItem = ({ product, onAddClick }) => {

    return (
        <li className="product-list-item">
            <div>{product.name}</div>
            <button onClick={partial(onAddClick, [product])}>
            Add to Cart
            </button>
        </li>
    );
};

export default ProductItem;
