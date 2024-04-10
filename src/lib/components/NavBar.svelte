<script lang="ts">
    import { AppRail, LightSwitch } from "@skeletonlabs/skeleton";
    import Logo from "./Logo.svelte";
</script>

<AppRail background="bg-grey-lightest dark:bg-black px-4 py-8" width="w-60">
    <svelte:fragment slot="lead">
        <div class="flex items-center h-4 p-4 w-full hover:brightness-75 transition-all">
            <a href="https://www.notbyte.com" class="grid grid-cols-[1fr_auto] gap-2">
                <Logo className="h-7" />
                <span class="text-xl font-semibold flex items-end">notByte</span>
            </a>
        </div>
    </svelte:fragment>
    <ul class="grid grid-rows-2 gap-2 p-4">
        {#each ["Napisz post", "Konfiguracja"] as el}
            <li class="p-2 hover:bg-colors pl-4">{ el }</li>     
        {/each}
    </ul>
    <svelte:fragment slot="trail">
        <div class="w-full">
            <LightSwitch />
        </div>
    </svelte:fragment>
</AppRail>