import { useAppSelector } from "@/GlobalRedux/hooks";
import { ROUTES } from "@/constants/routes";
import { useUpdateItemQuantity } from "@/hooks/useUpdateItemQuantity";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CartItemsProps = {
    item: Product;
};

export const CartItems: FC<CartItemsProps> = ({ item }) => {
    const { itemsQuantity } = useAppSelector((state) => state.cart);

    const { handleAddToCartClick, handleRemoveFromCartClick } =
        useUpdateItemQuantity(item);

    return (
        <article className="flex justify-between border w-full p-4">
            <div className="flex gap-4">
                <Link href={`${ROUTES.product}/${item.id}`}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        height={200}
                        width={200}
                        className="h-24 w-24 object-contain"
                    />
                </Link>
                <div className="flex flex-col gap-2">
                    <h3>{item.title}</h3>
                    <p>&#8377; {item.price}</p>
                    <div className="flex items-center gap-8 w-max">
                        <button
                            onClick={handleRemoveFromCartClick}
                            className="text-2xl flex h-max"
                        >
                            {" "}
                            -{" "}
                        </button>
                        <span className="text-md">
                            {itemsQuantity[item.id]}
                        </span>
                        <button
                            onClick={handleAddToCartClick}
                            className="text-2xl flex h-max"
                        >
                            {" "}
                            +{" "}
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={handleRemoveFromCartClick}>Remove</button>
        </article>
    );
};
