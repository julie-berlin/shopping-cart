import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import ShoppingCartStore from "./store/ShoppingCartStore";
import App from "./App";
import "./index.css";


const shoppingCartStore = ShoppingCartStore();

const productCatalog = [
  { id: 2, name: "mango", price: 1.39 },
  { id: 45, name: "blueberries", price: 5.99 },
  { id: 19, name: "banana", price: 0.49 }
];

ReactDOM.render(
  <Provider shoppingCartStore={shoppingCartStore}>
    <App productCatalog={productCatalog} />
  </Provider>,
  document.getElementById("root")
);
