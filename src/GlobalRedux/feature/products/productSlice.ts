"use client";

import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

type ProductState = {
    allProducts: Record<string, Product>;
    allProductsArr: number[];
};

const initialState: ProductState = {
    allProducts: {},
    allProductsArr: [],
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProductsToState: (state, { payload }) => {
            console.log({ payload });
            payload.forEach((data: Product) => {
                state.allProducts[data.id] = data;
                state.allProductsArr.push(data.id);
            });
        },
    },
});

export const { addProductsToState } = productSlice.actions;
