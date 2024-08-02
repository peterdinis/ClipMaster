'use client';

import { Camera } from 'lucide-react';
import { FC } from 'react';
import Link from 'next/link';
import ScrollWrapper from './ScrollWrapper';

const Footer: FC = () => {

    const homeScroll = () => {
		const heroSection = document.querySelector(
			"#home",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

    const scrollAbout = () => {
		const heroSection = document.querySelector(
			"#about",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

	const scrollServices = () => {
		const heroSection = document.querySelector(
			"#services",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

	const pricingScroll = () => {
		const heroSection = document.querySelector(
			"#pricing",
		) as unknown as HTMLElement;
		heroSection.scrollIntoView({ behavior: "smooth" });
	};

    return (
        <ScrollWrapper>
            <footer className='mt-5 w-full py-16 dark:bg-background'>
                <div className='md:px-12 lg:px-28'>
                    <div className='container m-auto space-y-6 text-gray-600 dark:text-gray-300'>
                        <div className='flex items-center justify-center space-x-2'>
                            <Camera size={30} />
                            <span>Clip Master</span>
                        </div>
                        <ul
                            role='list'
                            className='flex flex-col items-center justify-center gap-4 py-4 sm:flex-row sm:gap-8'
                        >
                            <li role='listitem'>
                                <Link onClick={homeScroll} href='#' className='hover:text-primary'>
                                    Home
                                </Link>
                            </li>
                            <li role='listitem'>
                                <Link onClick={scrollServices} href='#' className='hover:text-primary'>
                                    Services
                                </Link>
                            </li>
                            <li role='listitem'>
                                <Link onClick={pricingScroll} href='#' className='hover:text-primary'>
                                    Pricing
                                </Link>
                            </li>
                            <li role='listitem'>
                                <Link onClick={scrollAbout} href='#' className='hover:text-primary'>
                                    About Clip Master
                                </Link>
                            </li>
                        </ul>
                        <div className='flex items-center justify-center space-x-2 text-center'>
                            <span className='text-xl tracking-wide'>
                                &copy; Clip Master 2024
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </ScrollWrapper>
    );
};

export default Footer;
