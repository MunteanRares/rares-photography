<script lang="ts" setup>
import { motion } from "motion-v";

interface Props {
    underlineColor: string;
}
const props = defineProps<Props>();
</script>

<template>
    <span
        class="underline"
        :style="{
            border: `1px solid ${props.underlineColor}`,
            backgroundColor: `${props.underlineColor}`,
        }"
    ></span>
</template>

<style lang="scss">
@use "/assets/styles/animatedUnderline.scss";
</style>
