// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: false },
    modules: ["motion-v/nuxt", "@nuxt/image"],
    ssr: true,
});
