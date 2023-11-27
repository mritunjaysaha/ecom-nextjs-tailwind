"use client";

import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

type CartState = {
    items: Product[];
    itemsQuantity: Record<string, number>;
    totalQuantity: number;
    totalPrice: number;
};

const initialState: CartState = {
    items: [],
    itemsQuantity: {},
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const product = payload as Product;

            if (state.itemsQuantity[`${product.id}`]) {
                state.totalPrice += product.price;
                state.totalQuantity += 1;
                state.itemsQuantity[`${product.id}`] += 1;
                return;
            }

            const { items } = state;
            items.push(product);
            state.totalQuantity += 1;
            state.itemsQuantity[`${product.id}`] = 1;
            state.totalPrice += product.price;
        },

        removeFromCart: (state, { payload }) => {
            const product = payload as Product;

            let currentProductQuantity = state.itemsQuantity[`${product.id}`];

            if (currentProductQuantity > 1) {
                currentProductQuantity -= 1;

                return;
            }

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
