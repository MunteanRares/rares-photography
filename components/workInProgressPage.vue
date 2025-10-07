<template>
    <section class="workInProgress-section">
        <button @click="$router.back()" class="go-back">Go back</button>
        <div class="workInProgress-div">
            <h1 class="title">WORK IN PROGRESS...</h1>
            <div class="loading-bar">
                <div class="bar-fill"></div>
            </div>
            <p class="description">COMING SOON</p>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use "/assets/styles/workInProgressPage";
</style>
