/*
 * @Author: Oliver
 * @Date: 2024-01-30 17:28:45
 * @LastEditors: Oliver
 * @LastEditTime: 2024-01-30 17:28:51
 * @Description:
 *
 */
import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
