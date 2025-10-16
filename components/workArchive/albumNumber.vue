<script lang="ts" setup>
import MasonryWall from "@yeger/vue-masonry-wall";

const route = useRoute();
const albumId = String(route.params.id ?? "");

const { album } = await getAlbum(albumId);
const { photos, pending, error } = await getPhotos(albumId);
</script>

<template>
    <section class="album-photo-section">
        <div class="album-name-div">
            <h1 class="title">
                {{
                    album?.firstTitle.toUpperCase() +
                    " " +
                    album?.secondTitle.toUpperCase()
                }}
            </h1>
        </div>

        <MasonryWall
            :items="photos"
            :ssr-columns="4"
            :max-columns="4"
            :column-width="150"
            :gap="9"
            :key-mapper="(item) => item.thumbnailUrl"
            class="wall"
        >
            <template #default="{ item, index }">
                <div class="grid-cell-wrapper">
                    <NuxtImg
                        :key="index"
                        format="webp"
                        :src="item.thumbnailUrl"
                        class="grid-cell"
                        loading="lazy"
                    />
                </div>
            </template>
        </MasonryWall>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/workArchive/albumNumber.scss";
</style>
