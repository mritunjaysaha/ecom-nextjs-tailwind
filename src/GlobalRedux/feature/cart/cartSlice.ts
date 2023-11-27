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

            if (state.itemsQuantity[product.id]) {
                state.totalPrice += product.price;
                state.totalQuantity += 1;
                state.itemsQuantity[product.id] += 1;
                return;
            }

            const { items } = state;
            items.push(product);
            state.totalQuantity += 1;
            state.itemsQuantity[product.id] = 1;
            state.totalPrice += Number(product.price.toFixed(2));
        },

        removeFromCart: (state, { payload }) => {
            const product = payload as Product;

            let currentProductQuantity = state.itemsQuantity[product.id];
            console.log({ currentProductQuantity });
            if (currentProductQuantity > 1) {
                state.itemsQuantity[product.id] -= 1;
                state.totalPrice -= product.price;
                state.totalQuantity -= 1;

                return;
            }

            const filteredItems = state.items.filter(
                (item) => item.id !== product.id
            );

            state.itemsQuantity[product.id] -= 1;
            state.items = filteredItems;
            state.totalPrice -= product.price;
            state.totalQuantity -= 1;
        },

        removeAllItemsFromCart: (state, { payload }) => {
            const product = payload as Product;

            const quantities = state.itemsQuantity[product.id];
            state.items = state.items.filter((item) => item.id !== product.id);
            state.totalPrice -= quantities * Number(product.price.toFixed(2));
            state.totalQuantity -= quantities;
            state.itemsQuantity[product.id] = 0;
        },
    },
});

export const { addToCart, removeFromCart, removeAllItemsFromCart } =
    cartSlice.actions;
