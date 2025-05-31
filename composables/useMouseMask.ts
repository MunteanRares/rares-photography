import { ref, onMounted, onUnmounted } from "vue";

export interface MousePosition {
    x: number;
    y: number;
}

/**
 * @param selector - CSS selector string to bind the mask to (e.g., ".section-abt-me")
 */
export function useMouseMask(selector: string) {
    const maskPosition = ref<MousePosition>({ x: 0, y: 0 });

    function updateMask(e: MouseEvent) {
        const rect = document.querySelector(selector)?.getBoundingClientRect();
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

    return {
        maskPosition,
    };
}
