// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Production domain. Used for canonical URLs, sitemap, and OG tags.
export default defineConfig({
  site: "https://www.midwestwasteconsultants.com",
  integrations: [
    sitemap({
      // Keep internal-only pages out of the sitemap.
      filter: (page) => !page.includes("/status") && !page.includes("/photo-review"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
