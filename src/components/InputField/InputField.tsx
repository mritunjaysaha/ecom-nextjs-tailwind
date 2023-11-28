import { CheckoutFormType } from "@/types/checkoutForm";
import { FC, InputHTMLAttributes } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputFieldKeys =
    | "fullName"
    | "mobileNumber"
    | "pinCode"
    | "address1"
    | "address2"
    | "landmark"
    | "city"
    | "state";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    register: UseFormRegister<CheckoutFormType>;
    registerKey: InputFieldKeys;
    errors?: FieldErrors<CheckoutFormType>;
    validationSchema?: any;
};

export const InputField: FC<InputFieldProps> = ({
    label,
    register,
    registerKey,
    errors = {},
    validationSchema = {},
    ...rest
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">{label}</label>
            <input
                {...rest}
                {...register(registerKey, validationSchema)}
                className={`border rounded-md p-2 pl-4 ${!!errors[registerKey] ? "border-red-500":""}`}
            />
            {errors[registerKey]?.message && <p className="text-sm text-red-500">{errors[registerKey]?.message}</p>}
        </div>
    );
};
