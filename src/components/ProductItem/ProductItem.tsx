import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { ROUTES } from "@/constants/routes";
import { useDispatch } from "react-redux";
import {
    addToCart,
    removeFromCart,
} from "@/GlobalRedux/feature/cart/cartSlice";
import { Button } from "@/components/Button/Button";
import { useAppSelector } from "@/GlobalRedux/hooks";
import { useUpdateItemQuantity } from "@/hooks/useUpdateItemQuantity";

type ProductItemProps = {
    item: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ item }) => {
    const { handleAddToCartClick, handleRemoveFromCartClick } =
        useUpdateItemQuantity(item);

    const { itemsQuantity } = useAppSelector((state) => state.cart);

    return (
        <div className="flex flex-col border border-red-900 w-80 h-auto justify-between">
            <div>
                <Link href={`${ROUTES.product}/${item.id}`}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-96 h-96 object-contain border mb-4"
                    />
                </Link>{" "}
                <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p>&#8377; {item.price}</p>
                </div>
            </div>

            {!itemsQuantity[item.id] ? (
                <Button
                    className="mt-8 mb-4 mx-8"
                    onClick={handleAddToCartClick}
                >
                    Add to cart
                </Button>
            ) : (
                <div className="flex items-center justify-between w-3/4 mx-auto mb-4">
                    <button
                        onClick={handleRemoveFromCartClick}
                        className="text-4xl"
                    >
                        {" "}
                        -{" "}
                    </button>
                    <span className="text-xl font-semibold">
                        {itemsQuantity[item.id]}
                    </span>
                    <button onClick={handleAddToCartClick} className="text-4xl">
                        {" "}
                        +{" "}
                    </button>
                </div>
            )}
        </div>
    );
};
