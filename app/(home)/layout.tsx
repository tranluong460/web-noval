'use client';

import { HomeFooter, HomeHeader } from '@/components/layout';
import type { Metadata } from "next";
import { useState } from 'react';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Mock user data để test header
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Mock login function
    const handleLogin = async () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setUser({
                id: '1',
                name: 'Tiêu Viêm',
                avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
                cultivationLevel: 'Kim Đan',
                email: 'tieu.viem@tutien.com',
                points: 12580,
                vipLevel: 3
            });
            setIsLoading(false);
        }, 1000);
    };

    // Mock logout function
    const handleLogout = () => {
        setUser(null);
    };

    // Mock search function
    const handleSearch = (query) => {
        console.log('Searching for:', query);
        // Implement search logic here
    };

    return (
        <>
            <HomeHeader 
                user={user}
                onLogin={handleLogin}
                onLogout={handleLogout}
                onSearch={handleSearch}
                isLoading={isLoading}
            />
            <main>
                {children}
            </main>
            <HomeFooter />
        </>
    );
}