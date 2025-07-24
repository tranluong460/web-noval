import { HomeFooter, HomeHeader } from '@/components/layout';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Home",
};

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HomeHeader />
            <main>
                {children}
            </main>
            <HomeFooter />
        </>
    );
}