import { UserFooter, UserHeader, UserSidebar } from '@/components/layout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "User",
    description: "User",
};

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <UserHeader />
            <div className="flex min-h-screen">
                <UserSidebar />
                <main className="flex-1 p-6 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <UserFooter />
        </>
    );
}