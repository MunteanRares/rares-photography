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

export const underlineVariant = {
    initial: { borderWidth: "0px", width: "0%", left: "50%" },
    whileHover: {
        borderWidth: "1px",
        width: "100%",
        left: "0%",
    },
    transition: { duration: 0.4, ease: [0.12, 0, 0.1, 1] },
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

export const leftIconHoverVariant = (arrowPos?: number) => ({
    initial: { opacity: 0 },
    whileHover: {
        opacity: 1,
        x: 20,
        rotate: arrowPos ? arrowPos : 180,
        transition: { duration: 0.3 },
    },
});

export const menuItemVariant = {
    whileHover: { x: 20, transition: { type: "spring", duration: 0.6 } },
};

export const basicScaleVariant = {
    initial: { scale: 1 },
    whileHover: {
        scale: 1.05,
    },
};
