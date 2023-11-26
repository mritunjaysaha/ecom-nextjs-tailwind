import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import { ROUTES } from "@/constants/routes";
import { useDispatch } from "react-redux";
import { addToCart } from "@/GlobalRedux/feature/cart/cartSlice";

type ProductItemProps = {
    item: Product;
};

export const ProductItem: FC<ProductItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleAddToCartClick: React.MouseEventHandler<HTMLButtonElement> = (
        e
    ) => {
        e.stopPropagation();
        dispatch(addToCart(item));
    };

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
                    <p>Rs. {item.price}</p>
                </div>
            </div>

            <button
                className="bg-red-500 rounded-3xl text-lg p-2 font-semibold text-white mt-8 mb-4 mx-8"
                onClick={handleAddToCartClick}
            >
                Add to cart
            </button>
        </div>
    );
};
