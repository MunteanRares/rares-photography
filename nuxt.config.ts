// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import fs from "fs";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: false },
    modules: ["motion-v/nuxt", "@nuxt/image"],
    ssr: true,
});
