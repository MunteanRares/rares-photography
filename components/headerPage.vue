<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useMouseMask } from "../composables/useMouseMask";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight, faChevronLeft);

const { maskPosition } = useMouseMask(".overlay-blur");
const { currentHour } = getUpdatedHour();

const scrollToAbtMe = () => {
    const element = document.querySelector(".section-abt-me");
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
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

            <div class="header-content">
                <div class="top-text">
                    <p class="hour-text fade-in">
                        RM. &nbsp&nbsp{{ currentHour }}
                    </p>
                    <div class="social-text">
                        <div class="social-div">
                            <a
                                href="https://www.linkedin.com/in/muntean-rares-166897342/"
                                class="social-item"
                                >LINKEDIN</a
                            >

                            <AnimatedUnderline
                                :underline-color="theme.primaryColor"
                            />
                        </div>

                        <div class="social-div">
                            <a class="social-item">INSTAGRAM</a>

                            <AnimatedUnderline
                                :underline-color="theme.primaryColor"
                            />
                        </div>

                        <div class="social-div">
                            <a
                                href="https://github.com/MunteanRares"
                                class="social-item"
                                >GITHUB</a
                            >

                            <AnimatedUnderline
                                :underline-color="theme.primaryColor"
                            />
                        </div>
                    </div>
                </div>

                <div class="header-title">
                    <div class="title-name">
                        <p class="first-name">RARES</p>
                        <div class="second-name-div">
                            <p>MUNTEAN</p>
                            <p class="skills">
                                PHOTOGRAPHER • DEVELOPER • DESIGNER • EDITOR •
                                BUILDER
                            </p>
                        </div>
                    </div>

                    <div class="menu">
                        <di>
                            <div class="menu-item">
                                <div>
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>

                                <a class="menu-links" href="#">SHOP</a>

                                <div class="rightIcon">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>
                            </div>
                        </di>

                        <div>
                            <div class="menu-item">
                                <div>
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>

                                <a class="menu-links" href="#">WORK</a>

                                <div class="rightIcon">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <div>
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>

                                <a class="menu-links" href="#">WHAT I USE</a>

                                <div class="rightIcon">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <div>
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>

                                <a
                                    class="menu-links"
                                    @click.prevent="scrollToAbtMe"
                                    >ABOUT</a
                                >

                                <div class="rightIcon">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <div>
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>

                                <a class="menu-links" href="#">CONTACT</a>

                                <div class="rightIcon">
                                    <FontAwesomeIcon
                                        icon="chevron-left"
                                        class="icon-fixed"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bottom-text">
                    <p class="span-text">DESIGN IN MOTION.</p>
                    <div class="art-title-text">
                        <p>SOLSTICE MACE, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../assets/styles/headerPage.scss";
</style>
