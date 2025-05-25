import { delay } from "motion-v";

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

export const rightIconVariant = {
    initial: { opacity: 0, x: 20 },
    animate: {
        opacity: 1,
        x: 0,
    },

    whileHover: {
        opacity: 0,
        x: -20,
        rotate: 180,
        transition: { ease: [0.72, 0, 0.28, 1] },
    },
};

export const leftIconHoverVariant = {
    initial: { opacity: 0 },
    whileHover: { opacity: 1, x: 20, rotate: 180 },
};

export const menuItemVariant = {
    whileHover: { x: 20 },
    transition: { type: "spring" },
};
