import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	onwarn: (warning, handler) => {
		if(warning.message.includes('Unused CSS selector')) return;
		if(warning.message.includes("has unused export property 'parent'")) return;
		handler(warning);
	},
	kit: {
		adapter: adapter(),
		alias: {
			$types: './src/types',
		}
	}
};
export default config;