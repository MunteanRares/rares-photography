export function getCurrentYear() {
    const currentYear = ref(new Date().getFullYear());

    return { currentYear };
}
