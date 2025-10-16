<script lang="ts" setup>
import AlbumCard from "./albumCard.vue";

const { albums, pending, error } = getAlbums();
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

        <div v-if="pending">Loading...</div>
        <div v-else-if="error">
            An error has occured. Please try again later.
        </div>
        <div v-else class="albums-div">
            <AlbumCard
                v-for="album in albums"
                :key="album.number"
                :album-description="album.description"
                :first-album-title-part="album.firstTitle"
                :second-album-title-part="album.secondTitle"
                :album-number="album.number"
                :thumbnail-url="album.thumbnailUrl"
                :to="`work/` + album.number"
            />
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/workArchive/workPage.scss";
</style>
