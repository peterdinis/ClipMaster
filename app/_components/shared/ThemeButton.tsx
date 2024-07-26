'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { type FC, useEffect, useState } from 'react';

const ThemeButton: FC = () => {
    const [mounted, setMounted] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        setIsActive(!isActive);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div
            onClick={toggleTheme}
            className={`relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1`}
        >
            <Button
                variant='ghost'
                onClick={toggleTheme}
                className='flex items-center gap-2'
            >
                {isActive ? (
                    <Moon className='h-5 w-5' />
                ) : (
                    <Sun className='h-5 w-5' />
                )}
            </Button>
        </div>
    );
};

export default ThemeButton;
