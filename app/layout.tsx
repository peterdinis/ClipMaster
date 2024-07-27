import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import Navigation from './_components/shared/Navigation';
import { Toaster } from '@/components/ui/toaster';
import ThemeProvider from './_components/shared/ThemeProvider';
import LayoutWrapper from './_components/shared/LayoutWrapper';

const inter = Roboto({
    weight: "500"
});

export const metadata: Metadata = {
    title: 'ClipMaster',
    description: 'Application for editing videos',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <ThemeProvider>
                    <LayoutWrapper>
                        <Navigation />
                        {children}
                        <Toaster />
                    </LayoutWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
}
