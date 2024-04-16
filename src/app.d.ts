import 'unplugin-icons/types/svelte'

declare global {
	namespace App {
		interface Locals {
			user: Object | undefined
		}
		// interface PageData {}
		// interface Error {}
		// interface Platform {}
	}
} 
