<script lang="ts">
    import Options from "./components/Options.svelte";
    import Editor from "./components/Editor.svelte";
    import { platformList } from "./stores";
    import { getModalStore } from "@skeletonlabs/skeleton";

    const modalStore = getModalStore();
    let windowSize: number;
    
    $: if(windowSize >= 1024) {
        modalStore.clear()
    }
</script>

<svelte:window bind:innerWidth={windowSize}/>

<div class="p-6 lg:p-8 lg:px-16 overflow-x-auto">
    <Editor />
</div>
{#if windowSize >= 1024 }    
    <div class="border-l border-grey-light dark:border-grey-darker p-8 w-[20rem]">
        <Options />
    </div>
{/if}

<style lang="postcss">
    :global(main) {
        @apply grid grid-cols-[1fr_auto];
    }
</style>