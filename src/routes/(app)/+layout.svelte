<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';
	import NavBarResponsive from '$lib/components/NavBarResponsive.svelte';
	import Pencil from '~icons/ph/pencil-simple'
	import PencilFilled from '~icons/ph/pencil-simple-fill'
	import Gear from '~icons/ph/gear-six'
	import GearFilled from '~icons/ph/gear-six-fill'

	const navData: Array<{ route: string, text: string, icon: any, iconActive: any, fullRoute: string }> = [
        {
            text: "Napisz post",
            route: "/create",
			fullRoute: "/(app)/create",
			icon: Pencil,
			iconActive: PencilFilled
        },
        {
            text: "Konfiguruj",
            route: "/config",
			fullRoute: "/(app)/config",
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
