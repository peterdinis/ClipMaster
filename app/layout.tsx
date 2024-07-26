import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './_components/shared/Navigation';
import { Toaster } from '@/components/ui/toaster';
import ThemeProvider from './_components/shared/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

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
                <Navigation />
                {children}
                <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
