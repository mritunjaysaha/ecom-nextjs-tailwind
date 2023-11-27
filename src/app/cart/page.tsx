"use client";

import { useAppSelector } from "@/GlobalRedux/hooks";
import { CartItems } from "@/components/CartItems/CartItems";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export default function Cart() {
    const { items, totalPrice, totalQuantity } = useAppSelector(
        (state) => state.cart
    );

    return (
        <main className="px-24 py-12">
            <h1 className="mb-4 text-2xl font-bold">
                {totalQuantity ? "Shopping cart" : "Your cart is empty"}
            </h1>

            <section className="flex gap-8 w-full">
                <div className="flex flex-col w-9/12">
                    {items.map((item) => (
                        <CartItems key={item.id} item={item} />
                    ))}
                </div>
                {!!totalQuantity && (
                    <article className="flex flex-col border p-8 w-max h-max">
                        <p className="text-lg">
                            Subtotal (items {totalQuantity}):{" "}
                            <span className="font-bold">
                                &#8377; {totalPrice.toFixed(2)}
                            </span>
                        </p>
                        <Link
                            href={ROUTES.checkout}
                            className="rounded-lg bg-red-500 text-white text-center p-1 mt-2"
                        >
                            Proceed to buy
                        </Link>
                    </article>
                )}
            </section>
        </main>
    );
}
