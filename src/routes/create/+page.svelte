<script lang="ts">
    import Options from "./components/Options.svelte";
    import Editor from "./components/Editor.svelte";
    import { platformList } from "./stores";
</script>

<div class="p-8 px-16 overflow-x-auto">
    <Editor />
</div>
<div class="border-l border-black dark:border-grey-darkest p-8 hidden lg:block">
    <Options />
</div>

<style lang="postcss">
    :global(main) {
        @apply grid grid-cols-1 lg:grid-cols-[auto_20rem];
    }
</style>