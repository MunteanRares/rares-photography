// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: "",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Staatliches&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap",
                },
            ],
        },
    },
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    modules: ["motion-v/nuxt", "@nuxt/image"],
});