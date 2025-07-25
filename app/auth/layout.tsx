import { AuthorFooter, AuthorHeader, AuthorSidebar } from '@/components/layout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth",
    description: "Auth",
};

export default function AuthrLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
            <div className="flex min-h-screen">
                {children}
            </div>
    );
}