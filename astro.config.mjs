/*
 * @Author: Oliver
 * @Date: 2024-01-29 18:37:14
 * @LastEditors: Oliver
 * @LastEditTime: 2024-01-30 17:49:28
 * @Description:
 *
 */
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
// https://astro.build/config
export default defineConfig({
  site: "https://astro-study.netlify.app",
  integrations: [preact()],
});
