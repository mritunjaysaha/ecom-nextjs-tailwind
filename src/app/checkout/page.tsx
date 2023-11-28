"use client";

import { useAppSelector } from "@/GlobalRedux/hooks";
import { Button } from "@/components/Button/Button";
import { InputField } from "@/components/InputField/InputField";
import { PaymentDetails } from "@/components/PaymentDetails/PaymentDetails";
import { ROUTES } from "@/constants/routes";
import { CheckoutFormType } from "@/types/checkoutForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

    const { totalPrice, totalQuantity } = useAppSelector((state) => state.cart);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: initialValues,
    });

    const [showPaymentDetails, setShowPaymentDetails] =
        useState<boolean>(false);
    const [showOrderSuccessful, setShowOrderSuccessful] =
        useState<boolean>(false);

    const onSubmit = (data: CheckoutFormType) => {
        console.log("[onSubmit]", { data });

        setShowPaymentDetails(true);
    };

    return (
        <main className="p-24 flex gap-24">
            {!showPaymentDetails && (
                <>
                    <section className="w-3/4">
                        <h1 className="text-3xl font-semibold mb-16">
                            Checkout
                        </h1>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-8"
                        >
                            <InputField
                                label="Full name"
                                register={register}
                                registerKey="fullName"
                                errors={errors}
                                validationSchema={{ required: "Please enter full name" }}
                            />
                            <InputField
                                type="number"
                                label="Mobile number"
                                register={register}
                                registerKey="mobileNumber"
                                placeholder="+91 0123456789"
                                errors={errors}
                                validationSchema={{ required: "Please enter mobile number" }}
                            />
                            <InputField
                                label="Pincode"
                                register={register}
                                registerKey="pinCode"
                                placeholder="560000"
                                errors={errors}
                                validationSchema={{ required: "Please enter pin code", maxLength: 6 }}
                            />
                            <InputField
                                label="Flat, House no., Building, Company, Apartment"
                                register={register}
                                registerKey="address1"
                                validationSchema={{ required: "Please enter address" }}
                                errors={errors}
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
                                validationSchema={{ required: "Please enter city name" }}
                                errors={errors}
                            />
                            <InputField
                                label="State"
                                register={register}
                                registerKey="state"
                                validationSchema={{ required: "Please enter state" }}
                                errors={errors}
                            />
                            <Button className="w-40">Submit</Button>
                        </form>
                    </section>
                    <article className="w-1/4 flex flex-col gap-8 h-max rounded-md border p-4">
                        <h3 className="text-xl font-semibold">Order summary</h3>
                        <div className="flex items-center justify-between text-md">
                            <p>Items</p>
                            <p>{totalQuantity}</p>
                        </div>
                        <hr />
                        <div className="flex items-center justify-between text-2xl font-semibold text-red-500">
                            <p>Order Total:</p>
                            <p>&#8377; {totalPrice}</p>
                        </div>
                    </article>
                </>
            )}

            {showPaymentDetails && !showOrderSuccessful && (
                <section className="h-full w-full flex flex-col items-center justify-center gap-8">
                    <PaymentDetails
                        setShowOrderSuccessful={setShowOrderSuccessful}
                    />
                </section>
            )}

            {showOrderSuccessful && (
                <section className="h-full w-full flex flex-col items-center justify-center gap-8">
                    <h3 className="text-4xl font-bold">
                        Order placed successfully
                    </h3>

                    <p className="text-xl">Redirecting to home</p>
                </section>
            )}
        </main>
    );
}
