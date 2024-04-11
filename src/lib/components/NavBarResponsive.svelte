<script lang="ts">
    export let navData: Array<{ route: string, text: string }>;
    import { page } from "$app/stores";
    import Logo from "./Logo.svelte";
</script>

<ul class="bg-grey-lightest dark:bg-black w-full h-full lg:hidden grid grid-cols-3 grid-rows-1">
    {#each navData as el, i}
        <a href={el.route} class="transition-[background-color_background-image] text-xs text-center p-3 border-t border-grey-lightest dark:border-black {($page.route.id == el.route) ? '!border-primary-500' : ''}">
            <li>{ el.text }</li>     
        </a>
        {#if i == 0}
            <a href="https://www.notbyte.com" class="flex justify-center items-center hover:invert-[25%] transition-all">
                <li>
                    <Logo className="h-6" />
                </li>
            </a>
        {/if}
    {/each}
</ul>