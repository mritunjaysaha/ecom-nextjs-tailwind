"use client";
import { addProductsToState } from "@/GlobalRedux/feature/products/productSlice";
import { useAppDispatch } from "@/GlobalRedux/hooks";
import DATA from "@/app/dummyData.json";
import { useEffect } from "react";

export default function Home() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(addProductsToState(DATA));
    }, [DATA]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            test
        </main>
    );
}
