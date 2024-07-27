'use client';

import { FC, ReactNode, useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/app/_utils/getScrollAnimation';

interface ILayoutWrapperProps {
    children?: ReactNode;
}

const LayoutWrapper: FC<ILayoutWrapperProps> = ({
    children,
}: ILayoutWrapperProps) => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return <motion.div variants={scrollAnimation}>{children}</motion.div>;
};

export default LayoutWrapper;
