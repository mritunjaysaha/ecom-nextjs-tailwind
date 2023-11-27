"use client";

import { addProductsToState } from "@/GlobalRedux/feature/products/productSlice";
import { useAppSelector } from "@/GlobalRedux/hooks";
import { useDispatch } from "react-redux";

import Image from "next/image";

import DATA from "@/app/dummyData.json";
import { Button } from "@/components/Button/Button";

export default function ProductDetailsPage({
    params,
}: {
    params: { slug: string };
}) {
    const dispatch = useDispatch();
    const { allProducts } = useAppSelector((state) => state.products);

    const currentProduct = allProducts[params.slug];

    if (!currentProduct) {
        console.log({ currentProduct });
        dispatch(addProductsToState(DATA));
        return <>404 Not Found</>;
    }

    return (
        <main className="flex gap-24 p-24 ">
            <Image
                src={currentProduct.image}
                alt={currentProduct.title}
                height={600}
                width={600}
                className="w-120 aspect-square h-auto object-contain border"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-bold">{currentProduct.title}</h3>
                <h4 className="text-xl">{currentProduct.description}</h4>
                <p className="font-semibold text-lg">
                    Rs. {currentProduct.price}
                </p>

                <Button className="w-60">Add to cart</Button>
            </div>
        </main>
    );
}
