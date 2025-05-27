<script setup lang="ts">
interface MousePosition {
    x: number;
    y: number;
}

const maskPosition = ref<MousePosition>({ x: 0, y: 0 });

function updateMask(e: MouseEvent) {
    const rect = document
        .querySelector(".section-abt-me")
        ?.getBoundingClientRect();
    if (rect) {
        maskPosition.value = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }
}

onMounted(() => {
    maskPosition.value = {
        x: -window.innerWidth,
        y: window.innerHeight / 2,
    };
    window.addEventListener("mousemove", updateMask);
});

onUnmounted(() => {
    window.removeEventListener("mousemove", updateMask);
});
</script>

<template>
    <section class="section section-abt-me">
        <div class="background-container">
            <div
                class="overlay-blur-abt-me"
                :style="{
                    maskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 200px at ${maskPosition.x}px ${maskPosition.y}px, transparent 30%, black 100%)`,
                }"
            ></div>

            <div class="overlay-rectangle">
                <div class="rectangle-contents">
                    <img class="image-rectangle" src="/images/me-blackwhite.jpg"></img>
                </div>
            </div>

            <div class="aboutme-content">
                <div class="section-title">
                    <p>About Me</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "/assets/styles/aboutMeStyle.scss";
</style>
