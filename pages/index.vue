<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { delay, motion } from "motion-v";
import { basicTextVariant } from "../utils/animations";

library.add(faChevronRight);
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
                        <motion.div
                            :variants="basicTextVariant"
                            class="menu-item"
                        >
                            <FontAwesomeIcon
                                icon="chevron-right"
                                class="icon-fixed"
                            />
                            <p>SHOP</p>
                        </motion.div>

                        <motion.div
                            :variants="basicTextVariant"
                            class="menu-item"
                        >
                            <FontAwesomeIcon
                                icon="chevron-right"
                                class="icon-fixed"
                            />
                            <p>WORK</p>
                        </motion.div>

                        <motion.div
                            :variants="basicTextVariant"
                            class="menu-item"
                        >
                            <FontAwesomeIcon
                                icon="chevron-right"
                                class="icon-fixed"
                            />
                            <p>ABOUT</p>
                        </motion.div>

                        <motion.div
                            :variants="basicTextVariant"
                            class="menu-item"
                        >
                            <FontAwesomeIcon
                                icon="chevron-right"
                                class="icon-fixed"
                            />
                            <p>WHAT I USE</p>
                        </motion.div>

                        <motion.div
                            :variants="basicTextVariant"
                            class="menu-item"
                        >
                            <FontAwesomeIcon
                                icon="chevron-right"
                                class="icon-fixed"
                            />
                            <p>CONTACT</p>
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
