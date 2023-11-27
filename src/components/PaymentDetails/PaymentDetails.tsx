import { resetCart } from "@/GlobalRedux/feature/cart/cartSlice";
import { Button } from "@/components/Button/Button";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

type PaymentDetailsProps = {
    setShowOrderSuccessful: Dispatch<SetStateAction<boolean>>;
};

type PaymentDetailsForm = {
    name: string;
    cvv: string;
    cardNo: string;
    expiryMonth: string;
    expiryYear: string;
};

export const PaymentDetails: FC<PaymentDetailsProps> = ({
    setShowOrderSuccessful,
}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const initialState: PaymentDetailsForm = {
        name: "",
        cvv: "",
        cardNo: "",
        expiryMonth: "",
        expiryYear: "",
    };
    const { register, handleSubmit } = useForm({
        defaultValues: initialState,
    });

    const onSubmit = (data: PaymentDetailsForm) => {
        console.log({ data });

        setShowOrderSuccessful(true);

        dispatch(resetCart());

        setTimeout(() => {
            router.push(ROUTES.home);
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <input
                className="payment-input"
                placeholder="Name"
                {...register("name")}
            />
            <input
                type="number"
                className="payment-input"
                placeholder="Card Number"
                {...register("cardNo")}
            />
            <div className="flex gap-4">
                <input
                    type="number"
                    className="payment-input"
                    placeholder="Exp month"
                    {...register("expiryMonth", {
                        min: 1,
                        max: 12,
                    })}
                />
                <input
                    type="number"
                    className="payment-input"
                    placeholder="Exp year"
                    pattern="\d{2}"
                    {...register("expiryYear", {
                        min: 23,
                        max: 30,
                    })}
                />
            </div>
            <input
                type="number"
                min={0}
                max={999}
                className="payment-input"
                placeholder="CVV"
                {...register("cvv")}
            />

            <Button>Submit</Button>
        </form>
    );
};
