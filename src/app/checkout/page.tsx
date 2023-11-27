"use client";

import { InputField } from "@/components/InputField/InputField";
import { CheckoutFormType } from "@/types/checkoutForm";
import { useForm } from "react-hook-form";

export default function CheckoutPage() {
    const initialValues: CheckoutFormType = {
        fullName: "",
        mobileNumber: "",
        pinCode: "",
        address1: "",
        address2: "",
        landmark: "",
        city: "",
        state: "",
    };

    const { register, handleSubmit } = useForm({
        defaultValues: initialValues,
    });

    const onSubmit = (data: CheckoutFormType) => {
        console.log("[onSubmit]", { data });
    };

    return (
        <main className="p-24">
            <h1>Checkout</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8"
            >
                <InputField
                    label="Full name"
                    register={register}
                    registerKey="fullName"
                />
                <InputField
                    type="number"
                    label="Mobile number"
                    register={register}
                    registerKey="mobileNumber"
                    placeholder="+91 0123456789"
                />
                <InputField
                    label="Pincode"
                    register={register}
                    registerKey="pinCode"
                    placeholder="+91 0123456789"
                />
                <InputField
                    label="Flat, House no., Building, Company, Apartment"
                    register={register}
                    registerKey="address1"
                />
                <InputField
                    label="Area, Street, Sector, Village"
                    register={register}
                    registerKey="address2"
                />
                <InputField
                    label="Landmark"
                    register={register}
                    registerKey="landmark"
                    placeholder="E.g. near apollo hospital"
                />
                <InputField
                    label="Town/City"
                    register={register}
                    registerKey="city"
                />
                <InputField
                    label="State"
                    register={register}
                    registerKey="state"
                />
                <button>submit</button>
            </form>
        </main>
    );
}
