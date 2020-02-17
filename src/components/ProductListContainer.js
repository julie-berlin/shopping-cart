import { inject } from "mobx-react";

import ProductList from "./ProductList";

const withPropsMapped = inject(store => {
    return {
        onAddClick: store.shoppingCartStore.addToCart
    };
});

export default withPropsMapped(ProductList);
