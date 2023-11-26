import { removeFromCart } from "@/GlobalRedux/feature/cart/cartSlice";
import { ROUTES } from "@/constants/routes";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

type CartItemsProps = {
    item: Product;
};

export const CartItems: FC<CartItemsProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(removeFromCart(item));
    };

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
                    <p>Quantity: 1</p>
                </div>
            </div>
            <button onClick={handleRemoveClick}>Remove</button>
        </article>
    );
};
