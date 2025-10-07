<script lang="ts" setup>
import AlbumCard from "./albumCard.vue";

// here im going to fetch the albums from database and then display them using the AlbumCard component and v-for
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
        <AlbumCard
            first-album-title-part="AUTOFEST"
            second-album-title-part="BUCHAREST"
            album-number="01"
            album-description="NO CLUE WHAT IM WRITING HERE BUT I DONT WANT LOREM IPSUM SO ITS MUCH
            BETTER FOR DDOKK"
            class="delete-after"
        />
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/workArchive/workPage.scss";
</style>
