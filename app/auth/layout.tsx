import { AuthorFooter, AuthorHeader, AuthorSidebar } from '@/components/layout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth",
    description: "Auth",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}