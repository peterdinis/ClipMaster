'use client';

import { FC, useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/app/_utils/getScrollAnimation';
import { Highlight } from '@/components/ui/hightlight';

const HeroWrapper: FC = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);
    return (
        <motion.div
            variants={scrollAnimation}
            className='m-auto px-6 pt-32 md:px-12 lg:px-7 lg:pt-[4.8rem]'
        >
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className='mx-auto mt-24 max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-4xl lg:text-5xl lg:leading-snug'
            >
                Clip Master <br />
                <Highlight className='text-black dark:text-white'>
                    Your only software for video editing
                </Highlight>
            </motion.h1>
        </motion.div>
    );
};

export default HeroWrapper;
