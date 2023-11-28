import { resetCart } from "@/GlobalRedux/feature/cart/cartSlice";
import { Button } from "@/components/Button/Button";
import { ROUTES } from "@/constants/routes";
import { PaymentDetailsForm } from "@/types/paymentDetailsForm";
import { useRouter } from "next/navigation";
import { Dispatch, FC, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PaymentDetailsInputField } from "../PaymentDetailsInputField/PaymentDetailsInputField";

type PaymentDetailsProps = {
    setShowOrderSuccessful: Dispatch<SetStateAction<boolean>>;
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
    const { register, handleSubmit, formState: { errors } } = useForm({
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
            <PaymentDetailsInputField
                className="payment-input"
                placeholder="Name"
                register={register}
                registerKey="name"
                errors={errors}
                validationSchema={{ required: "Card name is required" }}
            />
            <PaymentDetailsInputField
                className="payment-input"
                placeholder="Card Number"
                register={register}
                registerKey="cardNo"
                errors={errors}
                validationSchema={{
                    required: "Card number is required", pattern: {
                        value: /^\d{16}$/,
                        message: 'Please enter a valid 16-digit card number',

                    }
                }}
            />
            <div className="flex gap-4">
                <PaymentDetailsInputField
                    className="payment-input"
                    placeholder="Exp month"
                    register={register}
                    registerKey="expiryMonth"
                    errors={errors}
                    validationSchema={{
                        required: 'Expiry date is required',
                        pattern: {
                            value: /^\d{2}$/,
                            message: 'Please enter a valid expiry date (MM)',
                        },
                    }}
                />
                <PaymentDetailsInputField
                    className="payment-input"
                    placeholder="Exp year"
                    register={register}
                    registerKey="expiryYear"
                    errors={errors}
                    validationSchema={{
                        required: 'Expiry date is required',
                        pattern: {
                            value: /^\d{4}$/,
                            message: 'Please enter a valid expiry date (YYYY)',
                        },
                    }}
                />
            </div>
            <PaymentDetailsInputField
                className="payment-input"
                placeholder="CVV"
                register={register}
                registerKey="cvv"
                errors={errors}
                validationSchema={{
                    required: 'CVV is required',
                    pattern: {
                        value: /^\d{3}$/,
                        message: 'Please enter a valid CVV',
                    },
                }}
            />

            <Button>Submit</Button>
        </form>
    );
};
