<script setup lang="ts">
interface MousePosition {
    x: number;
    y: number;
}

const maskPosition = ref<MousePosition>({ x: -10, y: -10 });
const isPointer = ref(false);
const isClicked = ref(false);

function updateMask(e: MouseEvent) {
    maskPosition.value = { x: e.clientX, y: e.clientY };
    const target = e.target as HTMLElement | null;
    if (
        target &&
        (target.tagName === "A" ||
            target.tagName === "BUTTON" ||
            (target.hasAttribute("role") &&
                target.getAttribute("role") === "button") ||
            target.onclick !== null)
    ) {
        isPointer.value = true;
    } else {
        isPointer.value = false;
    }
}

function mouseClick(e: MouseEvent) {
    isClicked.value = true;
}

function mouseUp(e: MouseEvent) {
    isClicked.value = false;
}

onMounted(() => {
    window.addEventListener("mousemove", updateMask);
    window.addEventListener("mousedown", mouseClick);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("dragenter", mouseUp);
});

onUnmounted(() => {
    window.removeEventListener("mousemove", updateMask);
    window.removeEventListener("mousedown", mouseClick);
    window.removeEventListener("mouseup", mouseUp);
    window.addEventListener("dragenter", mouseUp);
});
</script>

<template>
    <div
        class="cursor-dot"
        :class="{ 'cursor-dot-pointer': isPointer, 'click-effect': isClicked }"
        :style="{ left: maskPosition.x + 'px', top: maskPosition.y + 'px' }"
    ></div>
</template>

<style lang="scss">
@use "/assets/styles/general.scss";
</style>
