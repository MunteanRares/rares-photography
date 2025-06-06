<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useMouseMask } from "../../composables/useMouseMask";
import { scrollToAbtMe, scrollToContact } from "../../utils/scrollTo";
import {
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight, faChevronLeft);

const { maskPosition } = useMouseMask(".overlay-blur");
const { currentHour } = getUpdatedHour();

onMounted(async () => {
    await nextTick();
    const socialItems = document.querySelectorAll(".social-item");
    const menuLinks = document.querySelectorAll(".menu-links");

    basicStaggerOnLoad(".basicStaggerOnLoad");
    hoverOverButtonAnim(socialItems, 1.08);
    hoverOverHeaderPage(menuLinks);
});
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
                    <ClientOnly>
                        <p class="hour-text fade-in basicStaggerOnLoad">
                            RM. &nbsp&nbsp{{ currentHour }}
                        </p>
                    </ClientOnly>

                    <div class="social-text">
                        <div class="social-div basicStaggerOnLoad">
                            <a
                                href="https://www.linkedin.com/in/muntean-rares-166897342/"
                                class="social-item"
                                >LINKEDIN
                                <UnderlineBtn underlineColor="#1b2b27" />
                            </a>
                        </div>

                        <div class="social-div basicStaggerOnLoad">
                            <a class="social-item"
                                >INSTAGRAM
                                <UnderlineBtn underlineColor="#1b2b27" />
                            </a>
                        </div>

                        <div class="social-div basicStaggerOnLoad">
                            <a
                                href="https://github.com/MunteanRares"
                                class="social-item"
                                >GITHUB
                                <UnderlineBtn underlineColor="#1b2b27" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="header-title">
                    <div class="title-name">
                        <p class="first-name basicStaggerOnLoad">RARES</p>
                        <div class="second-name-div basicStaggerOnLoad">
                            <p>MUNTEAN</p>
                            <p class="skills basicStaggerOnLoad">
                                PHOTOGRAPHER • DEVELOPER • DESIGNER • EDITOR •
                                BUILDER
                            </p>
                        </div>
                    </div>

                    <div class="menu">
                        <div>
                            <div class="menu-item">
                                <a
                                    class="menu-links basicStaggerOnLoad"
                                    href="#"
                                >
                                    <p>SHOP</p>
                                    <div class="rightIcon">
                                        <FontAwesomeIcon
                                            icon="chevron-left"
                                            class="icon-fixed"
                                        /></div
                                ></a>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <a
                                    class="menu-links basicStaggerOnLoad"
                                    href="#"
                                >
                                    <p>WORK</p>
                                    <div class="rightIcon">
                                        <FontAwesomeIcon
                                            icon="chevron-left"
                                            class="icon-fixed"
                                        /></div
                                ></a>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <a
                                    class="menu-links basicStaggerOnLoad"
                                    href="#"
                                >
                                    <p>WHAT I USE</p>
                                    <div class="rightIcon">
                                        <FontAwesomeIcon
                                            icon="chevron-left"
                                            class="icon-fixed"
                                        /></div
                                ></a>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <a
                                    class="menu-links basicStaggerOnLoad"
                                    @click.prevent="scrollToAbtMe"
                                    href="#"
                                >
                                    <p>ABOUT</p>
                                    <div class="rightIcon">
                                        <FontAwesomeIcon
                                            icon="chevron-left"
                                            class="icon-fixed"
                                        /></div
                                ></a>
                            </div>
                        </div>

                        <div>
                            <div class="menu-item">
                                <a
                                    class="menu-links basicStaggerOnLoad"
                                    @click.prevent="scrollToContact"
                                    href="#"
                                >
                                    <p>CONTACT</p>
                                    <div class="rightIcon">
                                        <FontAwesomeIcon
                                            icon="chevron-left"
                                            class="icon-fixed"
                                        /></div
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bottom-text">
                    <p class="span-text basicStaggerOnLoad">
                        DESIGN IN MOTION.
                    </p>
                    <div class="art-title-text basicStaggerOnLoad">
                        <p>SOLSTICE MACE, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/index/headerPage.scss";
</style>
