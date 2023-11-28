import { PaymentDetailsForm } from "@/types/paymentDetailsForm";
import { FC, InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PaymentDetailsInputFieldKeys = "name" | "cardNo" | "cvv" | "expiryMonth" | "expiryYear"

type PaymentDetailsInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegister<PaymentDetailsForm>;
    registerKey: PaymentDetailsInputFieldKeys;
    errors?: FieldErrors<PaymentDetailsForm>;
    validationSchema?: any;
};

export const PaymentDetailsInputField: FC<PaymentDetailsInputFieldProps> = ({
    register,
    registerKey,
    errors = {},
    validationSchema = {},
    ...rest
}) => {
    return (
        <div className="flex flex-col gap-2">
            <input
                {...rest}
                {...register(registerKey, validationSchema)}
                className={`border rounded-md p-2 pl-4 ${!!errors[registerKey] ? "border-red-500" : ""}`}
            />
            {errors[registerKey]?.message && <p className="text-sm text-red-500">{errors[registerKey]?.message}</p>}
        </div>
    );
};
