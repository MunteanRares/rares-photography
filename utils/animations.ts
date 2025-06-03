import { SplitText, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// @param className - The class names u want to select for animation.
//Each element with that classname will animate on scroll with stagger between them
// Recommended class name: 'basicStaggerOnScroll'
export function basicStaggerOnScroll(children: NodeListOf<Element>) {
    children.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reset play reset",
            },
            opacity: 0,
            y: -20,
            duration: 0.8,
            ease: "power3.inOut",
        });
    });
}

// @param className - The class names u want to select for animation.
//Each element with that classname will animate on load or refresh page with stagger between them
// Recommended class name: 'basicStaggerOnLoad'
export function basicStaggerOnLoad(className: string) {
    gsap.from(className, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.inOut",
    });
}

// @param children - A NodeList of elements you want to animate.
//                   Typically selected via document.querySelectorAll('.yourClass').
//                   Each element will be split into words using SplitText, then animated when in view.
// Recommended class name: 'staggerWords'
export function staggerWordsOnScroll(children: NodeListOf<Element>) {
    children.forEach((el) => {
        const split = SplitText.create(el, {
            type: "words",
            autoSplit: true,
        });

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reset play reset",
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.02,
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
        const split = SplitText.create(el, {
            type: "words",
            autoSplit: true,
        });

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

export function appearOnScrollBasic(className: string) {
    const elements = document.querySelectorAll(className);
    elements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                toggleActions: "play reset play reset",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
        });
    });
}
