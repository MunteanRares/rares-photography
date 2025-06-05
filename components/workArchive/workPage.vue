<script lang="ts" setup>
import AlbumCard from "./albumCard.vue";
</script>

<template>
    <section class="section-work">
        <div class="bg-image">
            <div class="title">
                <p>Work</p>
                <p class="shifted-left">Archive</p>
            </div>
        </div>
        <div class="page-description-div">
            <p>
                A VISUAL ARCHIVE OF MY BEST WORK. CURATED ALBUMS CAPTURING
                MOMENTS, MOODS, AND STORIES THAT DEFINE MY JOURNEY THROUGH THE
                LENS.
            </p>
        </div>
        <AlbumCard class="delete-after" />
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/workArchive/workPage.scss";
</style>
