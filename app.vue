<script setup lang="ts">
useHead({
    link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Staatliches&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
        },
    ],
});
</script>

<template>
    <NuxtPage />
</template>

<style lang="scss">
@use "/assets/globalStyles/general.scss";
</style>
