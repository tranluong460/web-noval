import { AuthorFooter, AuthorHeader, AuthorSidebar } from '@/components/layout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Author",
    description: "Author",
};

export default function AuthorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AuthorHeader />
            <div className="flex min-h-screen">
                <AuthorSidebar />
                <main className="flex-1 p-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <AuthorFooter />
        </>
    );
}