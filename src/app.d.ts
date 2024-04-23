import 'unplugin-icons/types/svelte'

declare global {
	namespace App {
		interface Locals {
			user: Object | undefined
			fbUser: Object | undefined
			inUser: Object | undefined
		}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
} 
