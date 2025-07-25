import type { Metadata } from "next";
import { Inter } from "next/font/google";

import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: "Root",
    description: "Root",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                {children}
            </body>
        </html>
    );
}