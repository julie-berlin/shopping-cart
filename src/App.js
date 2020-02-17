import React from "react";

import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCartContainer";
import ProductList from "./components/ProductListContainer";
import "./App.css";

const App = ({ productCatalog }) => {
  return (
    <div className="App">
      <Header />
      <ProductList products={productCatalog} />
      <ShoppingCart />
    </div>
  );
};

export default App;
