<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
