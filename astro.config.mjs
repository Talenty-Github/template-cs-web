import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

const dateTime = new Date();

// https://astro.build/config
export default defineConfig({
	publicDir: 'public/',
	site: templateData.siteUrl,
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: '1.0',
			lastmod: `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDay()}`,
			i18n: {
				defaultLocale: 'en',
				locales: {
					en: 'en-US',
					es: 'es-ES'
				}
			}
		})
	],
	output: 'server',
	adapter: vercel({
		imageService: true
	})
});
