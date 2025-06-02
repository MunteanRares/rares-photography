<script lang="ts" setup>
interface Props {
    underlineColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
    underlineColor: theme.lightFontColor,
});
</script>

<template>
    <span
        class="underline"
        :style="{
            backgroundColor: props.underlineColor,
        }"
    ></span>
</template>

<style scoped lang="scss">
@use "/assets/styles/underlineBtn.scss";
</style>
