<script lang="ts">
    import { AppRail, LightSwitch } from "@skeletonlabs/skeleton";
    import Logo from "./Logo.svelte";
    import { page } from "$app/stores";
    export let navData: Array<{ route: string, text: string }>;
</script>

<AppRail background="bg-grey-lightest dark:bg-black px-4 py-8 h-full hidden lg:grid" width="w-60">
    <svelte:fragment slot="lead">
        <div class="flex items-center h-4 p-4 w-full">
            <a href="https://www.notbyte.com" class="grid grid-cols-[1fr_auto] gap-2 hover:invert-[25%] transition-all">
                <Logo className="h-7" />
            </a>
            <span class="text-xl font-semibold flex items-end">notByte Dev</span>
        </div>
    </svelte:fragment>
    <ul class="grid grid-rows-2 gap-2 p-4">
        {#each navData as el}
            <a href={el.route} class="hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] transition-[background-color_background-image] p-2 px-4 {($page.route.id == el.route) ? 'bg-colors text-white corner-br-md corner-grey-lightest dark:corner-black' : ''}">
                <li>{ el.text }</li>     
            </a>
        {/each}
    </ul>
    <svelte:fragment slot="trail">
        <div class="w-full">
            <LightSwitch />
        </div>
    </svelte:fragment>
</AppRail>