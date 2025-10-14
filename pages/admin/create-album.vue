<script setup lang="ts">
definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <CursorDot />
    <AdminCreateAlbum />
</template>
