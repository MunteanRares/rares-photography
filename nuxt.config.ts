// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import fs from "fs";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: false },
    modules: ["motion-v/nuxt", "@nuxt/image"],
    ssr: true,
    runtimeConfig: {
        public: {
            apiBase: "https://localhost:7277/api",
        },
    },

    vite: {
        server: {
            https: {
                key: fs.readFileSync(path.resolve(__dirname, "cert.key")),
                cert: fs.readFileSync(path.resolve(__dirname, "cert.crt")),
            },
            host: "localhost" as any,
            port: 3000,
        } as any,
    },
});
