<script setup lang="ts">
interface MousePosition {
    x: number;
    y: number;
}

const maskPosition = ref<MousePosition>({ x: -10, y: -10 });
const isPointer = ref(false);
const isClicked = ref(false);

// Checks from most deep element to the first one and checks if contains any button
function isClickableOrChild(element: HTMLElement | null): boolean {
    while (element) {
        if (
            element.tagName === "A" ||
            element.tagName === "BUTTON" ||
            element.classList.contains("clickable") ||
            (element.hasAttribute("role") &&
                element.getAttribute("role") === "button")
        ) {
            return true;
        }
        element = element.parentElement;
    }

    return false;
}

function updateMask(e: MouseEvent) {
    maskPosition.value = { x: e.clientX, y: e.clientY };
    const target = e.target as HTMLElement | null;
    isPointer.value = isClickableOrChild(target);
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

<style scoped lang="scss">
@use "/assets/styles/cursorDot.scss";
</style>
