"use client";

import { useAppSelector } from "@/GlobalRedux/hooks";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

export const Navbar = () => {
    const { totalPrice } = useAppSelector((state) => state.cart);

    return (
        <nav className="border h-24 px-24 flex items-center justify-end">
            <Link href={ROUTES.cart}>
                Cart:&nbsp;&nbsp;
                <span className="font-semibold text-lg">
                    &#8377; {Math.ceil(totalPrice)}
                </span>
            </Link>
        </nav>
    );
};
