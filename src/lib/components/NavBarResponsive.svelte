<script lang="ts">
    export let navData: Array<{ route: string, text: string, icon: any, iconActive: any, fullRoute: string }>;
    import { page } from "$app/stores";
    import { Avatar, popup } from "@skeletonlabs/skeleton";
    import { accountPopupSettings } from "./NavUtils";
    import StyledLightSwitch from "./StyledLightSwitch.svelte";
    import Logo from "./Logo.svelte";

    const { user } = $page.data
</script>

<ul class="bg-grey-lightest dark:bg-black w-full h-full lg:hidden grid grid-cols-5 grid-rows-1">
    {#each navData as el, i}
        <a href={el.route} class="transition-[background-color_background-image] text-xs text-[10px] text-center p-3">
            <svelte:component this={($page.route.id == el.fullRoute) ? el.iconActive : el.icon} class="size-6 mx-auto mb-1"></svelte:component>
            <li>{ el.text }</li>     
        </a>
    {/each}
    <a href="https://www.notbyte.com" class="flex justify-center items-center hover:invert-[25%] transition-all">
        <li>
            <Logo className="h-8" />
        </li>
    </a>
    <button on:click={() => { console.log("klik braaah") }} use:popup={accountPopupSettings} class="text-xs text-[10px] text-center p-3">
        <Avatar initials={user.username.slice(0, 2)} background="bg-colors" fill="fill-white" width="size-6 mx-auto mb-1" alt={user.username} />
        <li>Konto</li>
    </button>
    <label for="lightswitch" class="btn flex justify-center items-center flex-wrap text-xs text-[10px] text-center">
        <StyledLightSwitch />
        <li class="!m-0">Tryb</li>
    </label>
</ul>