"use client";

import { useAppSelector } from "@/GlobalRedux/hooks";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export const Navbar = () => {
    const { totalPrice } = useAppSelector((state) => state.cart);

    return (
        <nav className="border h-24 px-24 flex items-center justify-between">
            <Link href={ROUTES.home}>Home</Link>
            <Link href={ROUTES.cart}>
                Cart:&nbsp;&nbsp;
                <span className="font-semibold text-lg">
                    &#8377; {totalPrice.toFixed(2)}
                </span>
            </Link>
        </nav>
    );
};
