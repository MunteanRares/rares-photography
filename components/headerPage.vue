<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { motion } from "motion-v";
import { useMouseMask } from "../composables/useMouseMask";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight, faChevronLeft);

const { maskPosition } = useMouseMask(".overlay-blur");

const basicContainerStaggerProps = {
    variants: containerStaggerVariant,
    initial: "initial",
    animate: "animate",
};

const basicHoverScaleProps = {
    variants: basicScaleVariant,
    "while-hover": "whileHover",
};

const basicMenuItemProps = {
    initial: "initial",
    animate: "animate",
    "while-hover": "whileHover",
};
</script>

<template>
    <section class="section section-header">
        <div
            class="overlay-blur"
            :style="{
                maskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 100%)`,
                WebkitMaskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 100%)`,
            }"
        ></div>

        <div class="background-container">
            <div class="overlay-rectangle"></div>

            <motion.div
                v-bind="basicContainerStaggerProps"
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
                            v-bind="basicHoverScaleProps"
                            class="social-div"
                        >
                            <motion.a
                                href="https://www.linkedin.com/in/muntean-rares-166897342/"
                                class="social-item"
                                >LINKEDIN</motion.a
                            >

                            <AnimatedUnderline
                                :underline-color="theme.primaryColor"
                            />
                        </motion.div>

                        <motion.div
                            v-bind="basicHoverScaleProps"
                            class="social-div"
                        >
                            <motion.a class="social-item">INSTAGRAM</motion.a>

                            <AnimatedUnderline
                                :underline-color="theme.primaryColor"
                            />
                        </motion.div>

                        <motion.div
                            v-bind="basicHoverScaleProps"
                            class="social-div"
                        >
                            <motion.a
                                href="https://github.com/MunteanRares"
                                class="social-item"
                                >GITHUB</motion.a
                            >

                            <AnimatedUnderline
                                :underline-color="theme.primaryColor"
                            />
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
                                PHOTOGRAPHER • DEVELOPER • DESIGNER • EDITOR •
                                BUILDER
                            </motion.p>
                        </div>
                    </div>

                    <motion.div
                        v-bind="basicContainerStaggerProps"
                        class="menu"
                    >
                        <motion.div :variants="basicTextVariant">
                            <motion.div
                                v-bind="basicMenuItemProps"
                                class="menu-item"
                            >
                                <motion.div :variants="leftIconHoverVariant()">
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
                                v-bind="basicMenuItemProps"
                                class="menu-item"
                            >
                                <motion.div :variants="leftIconHoverVariant()">
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
                                v-bind="basicMenuItemProps"
                                class="menu-item"
                            >
                                <motion.div :variants="leftIconHoverVariant()">
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
                                v-bind="basicMenuItemProps"
                                class="menu-item"
                            >
                                <motion.div
                                    :variants="leftIconHoverVariant(270)"
                                >
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
                                v-bind="basicMenuItemProps"
                                class="menu-item"
                            >
                                <motion.div
                                    :variants="leftIconHoverVariant(270)"
                                >
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
                    <div class="art-title-text">
                        <motion.p :variants="basicTextVariant"
                            >SOLSTICE MACE, 2025</motion.p
                        >
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../assets/styles/headerStyle.scss";
</style>
