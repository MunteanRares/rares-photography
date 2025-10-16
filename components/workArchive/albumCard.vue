<script lang="ts" setup>
const props = defineProps({
    firstAlbumTitlePart: String,
    secondAlbumTitlePart: String,

    albumNumber: String,
    albumDescription: String,

    thumbnailUrl: String,

    to: String,
});
</script>

<template>
    <NuxtLink :to="to" class="album-card">
        <div
            class="album-image"
            :style="{ backgroundImage: `url(${thumbnailUrl})` }"
        >
            <p class="album-name">
                {{ props.firstAlbumTitlePart }} <br />
                {{ props.secondAlbumTitlePart }}
            </p>

            <div class="album-number">
                <span class="number">{{ props.albumNumber }}</span>
                <div class="color-div" style="background-color: #1b2b27"></div>
            </div>
        </div>
        <div class="album-description">
            {{ props.albumDescription?.toUpperCase() }}
        </div>
    </NuxtLink>
</template>

<style scoped lang="scss">
@use "/assets/styles/workArchive/albumCard.scss";
</style>
