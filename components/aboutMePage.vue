<script setup lang="ts">
import { useMouseMask } from "../composables/useMouseMask";

const { maskPosition } = useMouseMask(".section-abt-me");
</script>

<template>
    <section class="section section-abt-me">
        <div class="background-container">
            <div
                class="overlay-blur-abt-me"
                :style="{
                    maskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 100%)`,
                }"
            ></div>

            <div class="overlay-rectangle">
                <div class="rectangle-contents">
                    <div class="image-description">
                        <img
                            class="image-rectangle"
                            src="/images/me-blackandwhite.jpg"
                        />
                        <div class="abt-me-description">
                            <p class="description">
                                Hello, my name is Muntean Rareș. I am a student
                                at Spiru Haret university located in Bucharest.
                                I am an enthusiastic developer currently delving
                                into various aspects of technology through
                                personal projects ranging from full-stack
                                applications to engaging web experiences.
                            </p>

                            <p class="description">
                                In addition to coding, I have a strong interest
                                in photography, where I capture moments that I
                                intend to display right here on this website. I
                                am always receptive to new opportunities and
                                collaborations as I progress and expand my
                                knowledge in all domains.
                            </p>
                        </div>
                    </div>

                    <div class="download-cv-div">
                        <a class="download-cv" href=""
                            >DOWNLOAD A COPY OF MY CV HERE.</a
                        >

                        <AnimatedUnderline
                            :underline-color="theme.lightFontColor"
                        />
                    </div>
                </div>
            </div>

            <div class="aboutme-content">
                <p class="section-title">About Me</p>

                <p class="abt-me-resume">
                    FULL-STACK EXPLORER PASSIONATE ABOUT <br />
                    BUILDING, LEARNING, AND CREATINGs
                </p>

                <p class="art-title-text">CROWNED IN SILENCE, 2025</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/aboutMePage.scss";
</style>
