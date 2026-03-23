import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionTransitionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function SectionTransition({
  children,
  className,
  delay = 0,
}: SectionTransitionProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 72, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <motion.div
        initial={{ clipPath: "inset(18% 0% 0% 0% round 1.5rem)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.83, 0, 0.17, 1],
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
