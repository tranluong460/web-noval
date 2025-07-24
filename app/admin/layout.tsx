import { AdminFooter, AdminHeader, AdminSidebar } from '@/components/layout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin",
    description: "Admin",
};

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AdminHeader />
            <div className="flex min-h-screen bg-gray-100">
                <AdminSidebar />
                <main className="flex-1 p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
            <AdminFooter />
        </>
    );
}