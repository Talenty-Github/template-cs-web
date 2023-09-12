import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

const dateTime = new Date();

// https://astro.build/config
export default defineConfig({
	publicDir: 'public/',
	site: 'https://www.agenciatopty.com',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: '1.0',
			lastmod: `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDay()}`
		})
	],
	output: 'server',
	adapter: vercel({
		imageService: true,
		imagesConfig: {
			sizes: [320, 640, 1280]
		}
	})
});
