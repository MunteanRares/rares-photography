<script setup lang="ts">
import { motion } from "motion-v";
import { useMouseMask } from "../composables/useMouseMask";

const { maskPosition } = useMouseMask(".section-abt-me");

const basicAppearProps = {
    variants: basicAppearScrollVariant,
    "while-in-view": "onscreen",
    "in-view-options": { amount: 1 },
};
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
                    <motion.div initial="offscreen" class="image-description">
                        <motion.img
                            v-bind="basicAppearProps"
                            class="image-rectangle"
                            src="/images/me-blackandwhite.jpg"
                        />
                        <div class="abt-me-description">
                            <motion.p
                                v-bind="basicAppearProps"
                                class="description"
                            >
                                Hello, my name is Muntean Rareș. I am a student
                                at Spiru Haret university located in Bucharest.
                                I am an enthusiastic developer currently delving
                                into various aspects of technology through
                                personal projects ranging from full-stack
                                applications to engaging web experiences.
                            </motion.p>

                            <motion.p
                                v-bind="basicAppearProps"
                                class="description"
                            >
                                In addition to coding, I have a strong interest
                                in photography, where I capture moments that I
                                intend to display right here on this website. I
                                am always receptive to new opportunities and
                                collaborations as I progress and expand my
                                knowledge in all domains.
                            </motion.p>
                        </div>
                    </motion.div>

                    <motion.div
                        :variants="smallScaleVariant"
                        initial="initial"
                        animate="animate"
                        while-hover="whileHover"
                        class="download-cv-div"
                    >
                        <motion.a
                            class="download-cv"
                            href=""
                            v-bind="basicAppearProps"
                            while-hover="whileHover"
                            initial="offscreen"
                            >DOWNLOAD A COPY OF MY CV HERE.</motion.a
                        >

                        <AnimatedUnderline
                            :underline-color="theme.lightFontColor"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div initial="offscreen" class="aboutme-content">
                <motion.p v-bind="basicAppearProps" class="section-title"
                    >About Me</motion.p
                >

                <motion.p v-bind="basicAppearProps" class="abt-me-resume">
                    FULL-STACK EXPLORER PASSIONATE ABOUT <br />
                    BUILDING, LEARNING, AND CREATINGs
                </motion.p>

                <motion.p v-bind="basicAppearProps" class="art-title-text"
                    >CROWNED IN SILENCE, 2025</motion.p
                >
            </motion.div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/aboutMePage.scss";
</style>
