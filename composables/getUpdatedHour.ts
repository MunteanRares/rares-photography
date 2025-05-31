const currentHour = ref(formatTime(new Date()));

let interval: NodeJS.Timeout;

function formatTime(date: Date) {
    return date.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}

export function getUpdatedHour() {
    onMounted(() => {
        interval = setInterval(() => {
            currentHour.value = formatTime(new Date());
        }, 2000);
    });

    onUnmounted(() => {
        clearInterval(interval);
    });

    return { currentHour };
}
