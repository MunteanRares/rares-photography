// ONE TIME ANIMATIONS //
export const containerStaggerVariant = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.12 },
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

export const basicTextVariant = {
    initial: { opacity: 0, y: -20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.72, 0, 0.28, 1] },
    },
};

export const menuItemVariant = {
    whileHover: { x: 20, transition: { type: "spring", duration: 0.6 } },
};

export const basicScaleVariant = {
    initial: { scale: 1 },
    whileHover: {
        scale: 1.05,
    },
    whileTap: { scale: 0.98 },
};

export const smallScaleVariant = {
    initial: { scale: 1 },
    whileHover: {
        scale: 1.02,
    },
};

// SCROLLING ANIMATIONS //
export const basicAppearScrollVariant = {
    offscreen: {
        y: 20,
        opacity: 0,
        transition: { ease: [0.72, 0, 0.28, 1], duration: 0.4 },
    },

    onscreen: {
        y: 0,
        opacity: 1,
        transition: { ease: [0.72, 0, 0.28, 1], duration: 0.8 },
    },

    exit: {
        opacity: 0,
        transition: { duration: 5, ease: "easeInOut" },
    },

    whileHover: { opacity: 1, y: 0 },
};

import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// @param children - A NodeList of elements you want to animate.
//                   Typically selected via document.querySelectorAll('.yourClass').
//                   Each element will be split into words using SplitText, then animated when in view.
// Recommended class name: 'staggerWords'
export function staggerWordsOnScroll(children: NodeListOf<Element>) {
    children.forEach((el) => {
        const split = SplitText.create(el);

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reset play reset",
            },
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: 0.03,
            ease: "power2.inOut",
        });
    });
}

// @param children - A NodeList of elements you want to animate.
//                   Typically selected via document.querySelectorAll('.yourClass').
//                   Each element will be split into words using SplitText, then animated on scroll.
// Recommended class name: 'staggerWordsScrub'
// ! This Animation uses SCRUB.
export function staggerWordsScrub(children: NodeListOf<Element>) {
    children.forEach((el) => {
        const split = SplitText.create(el);

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reset play reset",
                scrub: 1,
                end: "bottom 35%",
            },
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.03,
            ease: "power2.inOut",
        });
    });
}

//  This animates while scrolling making the iamge appear and dissapear slowly when scrolling
//  Recommended class name: 'triggerScroll'
//  ! This Animation uses SCRUB.
export function triggerScrollImage() {
    gsap.from(".triggerScroll", {
        scrollTrigger: {
            trigger: ".triggerScroll",
            end: "bottom 20%",
            scrub: 2,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
    });
}

// @param split - A split element obtained from SplitText
//                Recommended to use SplitText.create(staggerTogether) then pass split in.
//  This animates while scrolling making the image appear and dissapear slowly
//  Recommended class name: 'staggerTogether'
//  ! This Animation uses SCRUB.
export function staggerTogether(split: globalThis.SplitText) {
    gsap.from(split.words, {
        scrollTrigger: {
            trigger: ".staggerTogether",
            toggleActions: "play reset play reset",
            scrub: 1,
            end: "bottom 65%",
        },
        opacity: 0,
        y: 15,
        duration: 1,
        stagger: 0.015,
        ease: "power2.inOut",
    });
}
