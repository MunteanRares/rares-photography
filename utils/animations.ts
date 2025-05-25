import { delay, easeIn } from "motion-v";

export const containerStaggerVariant = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.08 },
    },
};

export const basicTextVariant = {
    initial: { opacity: 0, y: -20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.72, 0, 0.28, 1] },
    },
};
