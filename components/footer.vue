<script lang="ts" setup>
import { getCurrentYear } from "../composables/getCurrentYear";

const { currentYear } = getCurrentYear();
</script>

<template>
    <footer class="footer">
        <span class="copyright">
            © {{ currentYear }} MUNTEAN RARES | ALL RIGHTS RESERVED</span
        >
    </footer>
</template>

<style lang="scss">
@use "/assets/styles/footer.scss";
</style>
