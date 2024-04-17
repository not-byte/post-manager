<script lang="ts">
    export let navData: Array<{ route: string, text: string, icon: any, iconActive: any, fullRoute: string }>;
    import { page } from "$app/stores";
    import { Avatar, popup } from "@skeletonlabs/skeleton";
    import { accountPopupResponsiveSettings } from "./NavUtils";
    import AccountPopup from "./AccountPopup.svelte";
    import StyledLightSwitch from "./StyledLightSwitch.svelte";
    import Logo from "./Logo.svelte";

    const { user } = $page.data
</script>

<ul class="bg-grey-lightest dark:bg-black border-t border-grey-lightest dark:border-black w-full h-full lg:hidden grid grid-cols-5 grid-rows-1 !text-[9px]">
    {#each navData as el, i}
        <a href={el.route} class="transition-[background-color_background-image] text-center p-3">
            <svelte:component this={($page.route.id == el.fullRoute) ? el.iconActive : el.icon} class="size-6 mx-auto mb-1"></svelte:component>
            <li>{ el.text }</li>     
        </a>
    {/each}
    <a href="https://www.notbyte.com" class="flex justify-center items-center hover:invert-[25%] transition-all">
        <li>
            <Logo className="h-8" />
        </li>
    </a>
    <button use:popup={accountPopupResponsiveSettings} class="text-center p-3">
        <Avatar initials={user.username.slice(0, 2)} background="bg-colors" fill="fill-white" width="size-6 mx-auto mb-1" alt={user.username} />
        <li>Konto</li>
    </button>
    <label for="lightswitch" class="text-center p-3">
        <StyledLightSwitch className="mx-auto mb-1" />
        <li class="!m-0">Tryb</li>
    </label>
    <div data-popup="accountPopupResponsiveSettings">
		<AccountPopup />
	</div>
</ul>

<style lang="postcss">
    ul {
        line-height: 11px;
    }
</style>