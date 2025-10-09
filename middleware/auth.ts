export default defineNuxtRouteMiddleware(async () => {
    try {
        const res = await $fetch<{ valid: boolean }>(
            `http://localhost:5121/api/admin/verifytoken`,
            {
                credentials: "include",
            }
        );
    } catch (err) {
        if (err) return navigateTo("/");
    }
});
