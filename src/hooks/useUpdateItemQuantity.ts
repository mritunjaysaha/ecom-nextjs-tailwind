import {
    addToCart,
    removeFromCart,
} from "@/GlobalRedux/feature/cart/cartSlice";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";

type UseUpdateItemQuantityReturns = {
    handleAddToCartClick: () => void;
    handleRemoveFromCartClick: () => void;
};

export const useUpdateItemQuantity = (
    item: Product
): UseUpdateItemQuantityReturns => {
    const dispatch = useDispatch();

    const handleAddToCartClick = () => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromCartClick = () => {
        dispatch(removeFromCart(item));
    };

    return {
        handleAddToCartClick,
        handleRemoveFromCartClick,
    };
};
