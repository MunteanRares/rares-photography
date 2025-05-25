<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion-v";

library.add(faChevronRight, faChevronLeft);
</script>

<template>
    <div class="section-header">
        <div class="background-container">
            <div class="overlay-blur"></div>
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
                    <div class="social-text">
                        <motion.p :variants="basicTextVariant"
                            >LINKEDIN</motion.p
                        >
                        <motion.p :variants="basicTextVariant"
                            >INSTAGRAM</motion.p
                        >
                        <motion.p :variants="basicTextVariant">GITHUB</motion.p>
                    </div>
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

                                <motion.div :variants="rightIconVariant">
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

                                <motion.div :variants="rightIconVariant">
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

                                <motion.div :variants="rightIconVariant">
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

                                <motion.div :variants="rightIconVariant">
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

                                <motion.div :variants="rightIconVariant">
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
