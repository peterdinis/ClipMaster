import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera } from 'lucide-react';
import { FC } from 'react';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

const Navigation: FC = () => {
    return (
        <>
            <nav className='fixed z-10 w-full bg-white md:absolute md:bg-transparent'>
                <div className='container m-auto px-2 md:px-12 lg:px-7'>
                    <div className='flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4'>
                        <Input
                            type='checkbox'
                            name='toggle_nav'
                            id='toggle_nav'
                            className='peer hidden'
                        />
                        <div className='z-30 flex w-full justify-between px-6 md:px-0 lg:w-max'>
                            <Link
                                href='/'
                                aria-label='logo'
                                className='flex items-center space-x-2'
                            >
                                <Camera size={30} />
                                <span className='text-2xl font-bold text-orange-500 dark:text-white'>
                                    Clip{' '}
                                    <span className='text-gray-500 dark:text-orange-300'>
                                        Master
                                    </span>
                                </span>
                            </Link>

                            <div className='flex max-h-10 items-center lg:hidden'>
                                <Label
                                    role='button'
                                    htmlFor='toggle_nav'
                                    aria-label='humburger'
                                    id='hamburger'
                                    className='relative h-auto w-10 p-2'
                                >
                                    <div
                                        id='line'
                                        className='m-auto h-0.5 w-6 rounded bg-yellow-900 transition duration-300 dark:bg-white'
                                    ></div>
                                    <div
                                        id='line2'
                                        className='m-auto mt-2 h-0.5 w-6 rounded bg-yellow-900 transition duration-300 dark:bg-white'
                                    ></div>
                                </Label>
                            </div>
                        </div>

                        <Label
                            role='button'
                            htmlFor='toggle_nav'
                            className='fixed left-0 top-0 z-10 hidden h-full w-full bg-opacity-30 backdrop-blur backdrop-filter peer-checked:block dark:bg-black dark:bg-opacity-80'
                        ></Label>
                        <div className='z-30 hidden w-full flex-col items-center justify-end gap-y-6 rounded-xl bg-white p-6 peer-checked:flex md:flex-nowrap lg:flex lg:w-7/12 lg:flex-row lg:gap-y-0 lg:bg-transparent lg:p-0'>
                            <div className='w-full text-gray-600 lg:pr-4'>
                                <ul className='flex w-full flex-col gap-y-6 text-sm font-medium tracking-wide lg:flex-row lg:gap-y-0'>
                                    <li>
                                        <Link
                                            href='#'
                                            className='block text-lg transition hover:text-primary dark:text-gray-300 md:px-4'
                                        >
                                            <span>Services</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href='#'
                                            className='block text-lg transition hover:text-primary dark:text-gray-300 md:px-4'
                                        >
                                            <span>Pricing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href='#'
                                            className='block text-lg transition hover:text-primary dark:text-gray-300 md:px-4'
                                        >
                                            <span>About Us</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <ThemeButton />
                            <div className='w-full min-w-max space-y-2'>
                                <Button
                                    type='button'
                                    title='Start buying'
                                    className='ml-4 w-full rounded-full px-6 py-3 text-center transition focus:bg-yellow-100 active:bg-yellow-200 dark:focus:bg-gray-800 dark:active:bg-gray-700 sm:w-max'
                                >
                                    <span className='block text-sm font-semibold dark:text-white'>
                                        Sign up
                                    </span>
                                </Button>
                                <Button
                                    type='button'
                                    variant={'secondary'}
                                    className='ml-4 w-full rounded-full px-6 py-3 text-center transition sm:w-max'
                                >
                                    <span className='block text-sm font-semibold text-orange-600'>
                                        Login
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;
