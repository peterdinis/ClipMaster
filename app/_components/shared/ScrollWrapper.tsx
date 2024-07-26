"use client"

import {motion} from "framer-motion";
import { FC, ReactNode } from "react";

interface IScrollWrapperProps {
    children?: ReactNode;
    className: string;
    props?: Record<string, unknown>;
}

const ScrollWrapper: FC<IScrollWrapperProps> = ({children, className, props}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollWrapper