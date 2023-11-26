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
            const id = payload as number;

            const filteredItems = state.items.filter((item) => {
                if (item.id === id) {
                    let { totalPrice, totalQuantity } = state;

                    totalPrice -= item.price;
                    totalQuantity -= 1;
                }

                return item;
            });

            console.log({ filteredItems });

            state.items = filteredItems;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
