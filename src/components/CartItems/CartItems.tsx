import { removeFromCart } from "@/GlobalRedux/feature/cart/cartSlice";
import { Product } from "@/types/product";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import { useDispatch } from "react-redux";

type CartItemsProps = {
    item: Product;
};

export const CartItems: FC<CartItemsProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        dispatch(removeFromCart(item.id));
    };

    return (
        <article className="flex justify-end border w-full">
            <div>
                <Image
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 object-contain"
                />
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
