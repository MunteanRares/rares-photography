import gsap from "gsap";

export function hoverOverButtonAnim(
    buttons: NodeListOf<Element>,
    scaleAmount: number
) {
    buttons.forEach((button) => {
        const underline = button.querySelector(".underline");
        if (!underline) return;

        button.addEventListener("mouseenter", () => {
            gsap.to(button, {
                scale: scaleAmount,
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(underline, {
                scaleX: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.in",
            });

            gsap.to(underline, {
                scaleX: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        });
    });
}

export function hoverOverLowOpacityAnim(buttons: NodeListOf<Element>) {
    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, {
                opacity: 0.5,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                opacity: 1,
                ease: "power2.in",
            });
        });
    });
}

export function hoverOverHeaderPage(buttons: NodeListOf<Element>) {
    buttons.forEach((button) => {
        const rightArrow = button.querySelector(".rightIcon");
        if (!rightArrow) return;
        button.addEventListener("mouseenter", () => {
            gsap.to(button, {
                x: 20,
                ease: "expo.out",
            });

            gsap.to(rightArrow, {
                x: 0,
                opacity: 1,
                ease: "expo.out",
                rotate: 180,
            });
        });

        button.addEventListener("mouseleave", () => {
            gsap.to(button, {
                x: 0,
                ease: "expo.out",
            });

            gsap.to(rightArrow, {
                x: -20,
                opacity: 0,
                ease: "expo.out",
                rotate: 0,
            });
        });
    });
}
