import { inject, observer } from "mobx-react";

import ShoppingCart from "./ShoppingCart";

const withPropsMapped = inject(store => {
    return {
        cart: store.shoppingCartStore.toCartView(),
        onRemoveClick: store.shoppingCartStore.removeFromCart
    };
});

export default withPropsMapped(observer(ShoppingCart));
