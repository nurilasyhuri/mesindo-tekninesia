import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mesindoteknisia.com',
  trailingSlash: 'always',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    preact(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        if (item.url === 'https://mesindoteknisia.com/' || item.url === 'https://mesindoteknisia.com') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (item.url.includes('/layanan/') || item.url.includes('/sparepart/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/fasilitas/') || item.url.includes('/proyek/') || item.url.includes('/request-quotation/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        item.lastmod = new Date();
        return item;
      },
    }),
  ],
});
