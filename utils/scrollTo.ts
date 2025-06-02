export const scrollToAbtMe = () => {
    const element = document.querySelector(".section-abt-me");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export const scrollToContact = () => {
    const element = document.querySelector(".section-contact");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

export const scrollToHeader = () => {
    const element = document.querySelector(".section-header");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};
