"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeUp({
  children,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}