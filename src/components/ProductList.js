import React from "react";
import ProductItem from "./ProductItem";


const ProductList = ({ products, onAddClick }) => {
  const renderProductItem = product => {
    return (
      <ProductItem key={product.id} product={product} onAddClick={onAddClick} />
    );
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul className="product-list">{products.map(renderProductItem)}</ul>
    </div>
  );
};

export default ProductList;
