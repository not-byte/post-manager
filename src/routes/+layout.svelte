<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
  import NavBarResponsive from '$lib/components/NavBarResponsive.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const navData: Array<{ route: string, text: string }> = [
        {
            text: "Napisz post",
            route: "/create"
        },
        {
            text: "Konfiguracja",
            route: "/config"
        }
    ]
</script>

<svelte:head>
	<title>Post Manager</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<NavBar {navData} />
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">
		<NavBarResponsive {navData} />
	</svelte:fragment>
</AppShell>

<style lang="postcss">
	:global(main) {
		@apply p-8;
	}
</style>
