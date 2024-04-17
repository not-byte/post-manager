<script lang="ts">
    import type { SvelteComponent } from 'svelte';
    import Options from "./Options.svelte";
    import { getModalStore } from "@skeletonlabs/skeleton";

    export let parent: SvelteComponent;

    const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
    <div class="card border border-grey-light dark:border-grey-darker py-4 px-8">
        <Options />
    </div>
{/if}