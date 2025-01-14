import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      title: "Algorithm  Visualizer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Software Engineer",
        },
      ],
    },
  },

  css: ["~/assets/main.scss"],
  plugins: [],
  modules: ["@pinia/nuxt"],
  build: {},
  compatibilityDate: "2025-01-13",
});