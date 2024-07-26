"use client"

import { NextPage } from 'next';
import HeroWrapper from './_components/hero/HeroWrapper';
import {motion} from "framer-motion";

const Homepage: NextPage = () => {
    return (
        <motion.div initial='initial' animate='animate'>
            <HeroWrapper />
        </motion.div>
    );
};

export default Homepage;
