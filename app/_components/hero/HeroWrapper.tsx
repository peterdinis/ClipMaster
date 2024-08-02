'use client';

import { FC, useMemo } from 'react';
import icon from '../../../public/img/hero.png';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import getScrollAnimation from '@/app/_utils/getScrollAnimation';
import { motion } from 'framer-motion';

const HeroWrapper: FC = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <motion.section id="home" variants={scrollAnimation}>
            <div className='relative isolation-auto mx-auto min-h-screen max-w-screen-xl overflow-hidden'>
                <Image
                    src={icon}
                    alt='header'
                    className='absolute left-1/2 top-1/2 w-full max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform drop-shadow-[0_0_50px_rgba(0,0,0,0.8)]'
                />
                <h4 className='prose-h4: prose absolute left-1/2 top-1/2 z-50 -translate-x-[calc(50%+250px)] -translate-y-1/2 transform text-5xl tracking-[25px] dark:text-white'>
                    Clip
                </h4>
                <h4 className='prose-h4: prose absolute left-1/2 top-1/2 z-50 -translate-x-[calc(50%-250px)] -translate-y-1/2 transform text-5xl tracking-[25px] dark:text-white'>
                    Master
                </h4>
                <div className='flex justify-center align-top'>
                    <Button
                        variant={'default'}
                        className='btn text-text-dark absolute left-1/2 top-1/2 mt-12 -translate-x-1/2 translate-y-[calc(-50%+225px)] transform shadow-[0_0_50px_rgba(0,0,0,0.4)]'
                    >
                        <Link className='p-2 text-2xl' href='/login'>
                            Try now
                        </Link>
                    </Button>
                </div>
                <Button
                    variant={'default'}
                    className='btn absolute right-0 top-1/2 translate-y-[-50%] rotate-90 transform border text-white'
                >
                    <Link className='p-2 text-2xl' href='/services'>
                        Services & Pricing
                    </Link>
                </Button>
                <Button
                    variant={'secondary'}
                    className='btn text-text-dark border-text-dark absolute left-0 top-1/4 translate-y-[-50%] rotate-[-90deg] transform border'
                >
                    <Link href='/about' className='p-2 text-2xl'>
                        About Clip Master
                    </Link>
                </Button>
            </div>
        </motion.section>
    );
};

export default HeroWrapper;
