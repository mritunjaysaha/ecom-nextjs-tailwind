import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { ROUTES } from "@/constants/routes";

export const ProductItem: FC<Partial<Product>> = ({
    id,
    image = "",
    title = "",
    price,
}) => {
    return (
        <Link href={`${ROUTES.product}/${id}`}>
            <article className="flex flex-col border border-red-900 w-96">
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-96 h-96 object-contain border mb-4"
                />
                <h3 className="font-semibold text-lg">{title}</h3>
                <p>Rs. {price}</p>

                <button className="bg-red-500 p-1 rounded-xl font-semibold text-white mt-8">
                    Add to cart
                </button>
            </article>
        </Link>
    );
};
