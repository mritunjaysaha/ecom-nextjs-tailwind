"use client";

import { store } from "@/GlobalRedux/store";
import { FC } from "react";
import { Provider } from "react-redux";

type ProvidersProps = {
    children: React.ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};
