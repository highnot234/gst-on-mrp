// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://gstonmrp.com';

/**
 * Per-page sitemap metadata.
 * changefreq — how often the page content changes.
 * priority   — relative importance 0.0–1.0 (default 0.5).
 *              Google ignores this but Bing and others still read it.
 */
const PAGE_META = {
  [`${SITE}/`]:                        { changefreq: 'weekly',  priority: 1.0 },
  [`${SITE}/about/`]:                  { changefreq: 'monthly', priority: 0.6 },
  [`${SITE}/contact/`]:                { changefreq: 'monthly', priority: 0.6 },
  [`${SITE}/privacy-policy/`]:         { changefreq: 'yearly',  priority: 0.3 },
  [`${SITE}/terms-and-conditions/`]:   { changefreq: 'yearly',  priority: 0.3 },
};

// Today's date in YYYY-MM-DD for lastmod
const TODAY = new Date().toISOString().slice(0, 10);

// Update `site` to your production domain before deploying.
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Exclude noindex error pages from the sitemap entirely.
      filter: (page) =>
        !page.includes('/404') && !page.includes('/500'),

      // Inject lastmod, changefreq and priority for every URL.
      serialize(item) {
        const meta = PAGE_META[item.url] ?? { changefreq: 'monthly', priority: 0.5 };
        return {
          ...item,
          lastmod: TODAY,
          changefreq: meta.changefreq,
          priority: meta.priority,
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
