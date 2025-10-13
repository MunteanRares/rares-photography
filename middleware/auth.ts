export default defineNuxtRouteMiddleware(async () => {
    if (import.meta.server) return;

    try {
        await $fetch<{ valid: boolean }>(
            `http://localhost:5121/api/admin/verifytoken`,
            {
                credentials: "include",
            }
        );
    } catch (err) {
        return navigateTo("/");
    }
});
