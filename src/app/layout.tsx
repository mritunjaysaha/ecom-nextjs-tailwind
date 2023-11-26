"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/GlobalRedux/Provider";
import { store } from "@/GlobalRedux/store";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Navbar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
