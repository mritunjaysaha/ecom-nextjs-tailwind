import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button
            {...rest}
            className={`bg-red-500 rounded-3xl text-lg p-2 font-semibold text-white ${rest.className}`}
        >
            {children}
        </button>
    );
};
