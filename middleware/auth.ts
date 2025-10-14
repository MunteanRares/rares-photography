import { CONFIG } from "~/src/config";

export default defineNuxtRouteMiddleware(async () => {
    let statusCode = 0;

    try {
        const res = await $fetch<{ valid: boolean }>(
            `${CONFIG.API_BASE_URL}admin/verifytoken`,
            {
                headers: useRequestHeaders(["cookie"]),
                credentials: "include",
                onResponse({ response }) {
                    statusCode = response.status;
                },
            }
        );
    } catch {
    } finally {
        if (statusCode == 401) {
            return navigateTo("/");
        }
    }
});
