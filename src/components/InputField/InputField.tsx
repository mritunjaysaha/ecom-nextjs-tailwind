import { CheckoutFormType } from "@/types/checkoutForm";
import { FC, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

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
};

export const InputField: FC<InputFieldProps> = ({
    label,
    register,
    registerKey,
    ...rest
}) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-semibold text-lg">{label}</label>
            <input
                {...rest}
                {...register(registerKey)}
                className="border rounded-md p-2 pl-4"
            />
        </div>
    );
};
