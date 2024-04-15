<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';
	import NavBarResponsive from '$lib/components/NavBarResponsive.svelte';
	import Pencil from '~icons/ph/pencil-simple'
	import PencilFilled from '~icons/ph/pencil-simple-fill'
	import Gear from '~icons/ph/gear-six'
	import GearFilled from '~icons/ph/gear-six-fill'

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const navData: Array<{ route: string, text: string, icon: any, iconActive: any }> = [
        {
            text: "Napisz post",
            route: "/create",
			icon: Pencil,
			iconActive: PencilFilled
        },
        {
            text: "Konfiguracja",
            route: "/config",
			icon: Gear,
			iconActive: GearFilled
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
