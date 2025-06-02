<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>

<style lang="scss">
@use "/assets/globalStyles/general.scss";
</style>
