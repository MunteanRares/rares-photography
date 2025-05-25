<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion-v";

library.add(faChevronRight, faChevronLeft);

interface MousePosition {
    x: number;
    y: number;
}

const maskPosition = ref<MousePosition>({ x: 0, y: 0 });

function updateMask(e: MouseEvent) {
    maskPosition.value = { x: e.clientX, y: e.clientY };
}

onMounted(() => {
    maskPosition.value = {
        x: -window.innerWidth,
        y: window.innerHeight / 2,
    };
    window.addEventListener("mousemove", updateMask);
});

onUnmounted(() => {
    window.removeEventListener("mousemove", updateMask);
});
</script>

<template>
    <CursorDot />
    <div class="section-header">
        <div class="background-container">
            <div
                class="overlay-blur"
                :style="{
                    maskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 0%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 0%, black 100%)`,
                }"
            ></div>
            <div class="overlay-rectangle"></div>

            <motion.div
                :variants="containerStaggerVariant"
                initial="initial"
                animate="animate"
                class="header-content"
            >
                <div class="top-text">
                    <motion.p
                        :variants="basicTextVariant"
                        class="hour-text fade-in"
                        >RM. &nbsp&nbsp12:17PM</motion.p
                    >
                    <motion.div
                        class="social-text"
                        :variants="basicTextVariant"
                    >
                        <motion.div
                            :variants="basicScaleVariant"
                            while-hover="whileHover"
                            class="social-div"
                        >
                            <motion.a
                                href="https://www.linkedin.com/in/muntean-rares-166897342/"
                                class="social-item"
                                >LINKEDIN</motion.a
                            >

                            <motion.span
                                :variants="underlineVariant"
                                class="underline"
                            ></motion.span>
                        </motion.div>

                        <motion.div
                            :variants="basicScaleVariant"
                            while-hover="whileHover"
                            class="social-div"
                        >
                            <motion.a class="social-item">INSTAGRAM</motion.a>

                            <motion.span
                                :variants="underlineVariant"
                                class="underline"
                            ></motion.span>
                        </motion.div>

                        <motion.div
                            :variants="basicScaleVariant"
                            while-hover="whileHover"
                            class="social-div"
                        >
                            <motion.a
                                href="https://github.com/MunteanRares"
                                class="social-item"
                                >GITHUB</motion.a
                            >

                            <motion.span
                                :variants="underlineVariant"
                                class="underline"
                            ></motion.span>
                        </motion.div>
                    </motion.div>
                </div>

                <div class="header-title">
                    <div class="title-name">
                        <motion.p
                            :variants="basicTextVariant"
                            class="first-name"
                            >RARES</motion.p
                        >
                        <div class="second-name-div">
                            <motion.p :variants="basicTextVariant"
                                >MUNTEAN</motion.p
                            >
                            <motion.p
                                :variants="basicTextVariant"
                                class="skills"
                            >
                                DEVELOPER • DESIGNER • PHOTOGRAPHER • EDITOR •
                                BUILDER
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        :variants="containerStaggerVariant"
                        initial="initial"
                        animate="animate"
                        class="menu"
                    >
                        <motion.div :variants="basicTextVariant">
                            <motion.div
                                class="menu-item"
                                while-hover="whileHover"
                                animate="animate"
                                initial="initial"
                            >
                                <motion.div :variants="leftIconHoverVariant">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>

                                <motion.a
                                    :variants="menuItemVariant"
                                    class="menu-links"
                                    href="#"
                                    >SHOP</motion.a
                                >

                                <motion.div
                                    :variants="rightIconVariant"
                                    class="rightIcon"
                                >
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div :variants="basicTextVariant">
                            <motion.div
                                class="menu-item"
                                while-hover="whileHover"
                                initial="initial"
                                animate="animate"
                            >
                                <motion.div :variants="leftIconHoverVariant">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>

                                <motion.a
                                    :variants="menuItemVariant"
                                    class="menu-links"
                                    href="#"
                                    >WORK</motion.a
                                >

                                <motion.div
                                    :variants="rightIconVariant"
                                    class="rightIcon"
                                >
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div :variants="basicTextVariant">
                            <motion.div
                                while-hover="whileHover"
                                initial="initial"
                                animate="animate"
                                class="menu-item"
                            >
                                <motion.div :variants="leftIconHoverVariant">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>

                                <motion.a
                                    :variants="menuItemVariant"
                                    class="menu-links"
                                    href="#"
                                    >ABOUT</motion.a
                                >

                                <motion.div
                                    :variants="rightIconVariant"
                                    class="rightIcon"
                                >
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div :variants="basicTextVariant">
                            <motion.div
                                while-hover="whileHover"
                                initial="initial"
                                animate="animate"
                                class="menu-item"
                            >
                                <motion.div :variants="leftIconHoverVariant">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>

                                <motion.a
                                    :variants="menuItemVariant"
                                    class="menu-links"
                                    href="#"
                                    >WHAT I USE</motion.a
                                >

                                <motion.div
                                    :variants="rightIconVariant"
                                    class="rightIcon"
                                >
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div :variants="basicTextVariant">
                            <motion.div
                                while-hover="whileHover"
                                initial="initial"
                                animate="animate"
                                class="menu-item"
                            >
                                <motion.div :variants="leftIconHoverVariant">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>

                                <motion.a
                                    :variants="menuItemVariant"
                                    class="menu-links"
                                    href="#"
                                    >CONTACT</motion.a
                                >

                                <motion.div
                                    :variants="rightIconVariant"
                                    class="rightIcon"
                                >
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <div class="bottom-text">
                    <motion.p :variants="basicTextVariant" class="span-text"
                        >DESIGN IN MOTION.</motion.p
                    >
                    <div class="copyright-text">
                        <motion.p :variants="basicTextVariant"
                            >COPYRIGHT &copy 2025</motion.p
                        >
                        <motion.p :variants="basicTextVariant"
                            >MUNTEAN RARES</motion.p
                        >
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../assets/styles/index.scss";
</style>
