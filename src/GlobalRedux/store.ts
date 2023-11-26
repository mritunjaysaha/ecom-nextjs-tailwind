import { cartSlice } from "@/GlobalRedux/feature/cart/cartSlice";
import { productSlice } from "@/GlobalRedux/feature/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
