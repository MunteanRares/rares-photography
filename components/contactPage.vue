<script lang="ts" setup>
import { motion } from "motion-v";
</script>

<template>
    <section class="section-contact">
        <motion.p v-bind="basicAppearProps" class="section-title"
            >GET IN TOUCH</motion.p
        >
    </section>
    <Footer />
</template>

<style scoped lang="scss">
@use "/assets/styles/contactPage.scss";
</style>
