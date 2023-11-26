"use client";

import { store } from "@/GlobalRedux/store";
import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    items: Product[];
    totalQuantity: number;
    totalPrice: number;
};

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const product = payload as Product;

            const { items } = state;

            items.push(product);
            state.totalQuantity += 1;
            state.totalPrice += product.price;
        },

        removeFromCart: (state, { payload }) => {
            const product = payload as Product;

            const filteredItems = state.items.filter(
                (item) => item.id !== product.id
            );

            state.items = filteredItems;
            state.totalPrice -= product.price;
            state.totalQuantity -= 1;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
