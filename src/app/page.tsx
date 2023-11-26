"use client";
import { addProductsToState } from "@/GlobalRedux/feature/products/productSlice";
import { useAppDispatch } from "@/GlobalRedux/hooks";
import DATA from "@/app/dummyData.json";
import { Product } from "@/types/product";
import { useEffect } from "react";
import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import { ProductItem } from "@/components/ProductItem/ProductItem";

export default function Home() {
    const dispatch = useAppDispatch();

    const data: Product[] = DATA;

    useEffect(() => {
        dispatch(addProductsToState(data));
    }, [data]);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {data.map(({ id, price, image, title }) => {
                return (
                    <ProductItem
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        image={image}
                    />
                );
            })}
        </main>
    );
}
