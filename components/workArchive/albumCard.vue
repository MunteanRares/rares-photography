<script lang="ts" setup>
const props = defineProps({
    firstAlbumTitlePart: String,
    secondAlbumTitlePart: String,

    albumNumber: String,
    albumDescription: String,

    // firstColor: Object,
    // secondColor: Object,
});
</script>

<template>
    <div class="album-card">
        <div
            class="album-image"
            style="background-image: url('/images/IMG_3449.jpg')"
        >
            <p class="album-name">
                {{ props.firstAlbumTitlePart }} <br />
                {{ props.secondAlbumTitlePart }}
            </p>

            <div class="album-number">
                <span class="number">{{ props.albumNumber }}</span>
                <div class="color-div" style="background-color: #2c2c15"></div>
                <div class="color-div" style="background-color: #938676"></div>
            </div>
        </div>
        <div class="album-description">
            {{ props.albumDescription }}
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "/assets/styles/workArchive/albumCard.scss";
</style>
