<script lang="ts">
    import { platformList, post } from "../stores";

    let processedPost = ""
    let preview: HTMLElement;
    $: if(preview) {
        console.log(preview.innerText)
        processInput()
    }

    function processText(text: string) {
        const hashtagRegex = /#\w+/g
        const urlRegex: RegExp = /\b(?:https?|ftp):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[-A-Za-z0-9+&@#\/%=~_|]/g
        let newlines = text.replace(/\n/g, "<br>")
        let hashtags = newlines.replace(hashtagRegex, match => `<span class="hashtag">${match}</span>`)
        let links = hashtags.replace(urlRegex, match => `<a class="link" href="${match}">${match}</a>`)
        return links;
    }

    function processInput() {
        console.log("input")
        processedPost = processText($post.body)
        if(preview) {
            preview.innerHTML = processedPost
            console.log(preview.innerText)
        }
    }
</script>

{#if $platformList[3].checked}    
    <div>
        <legend class="h3">Tytuł</legend>
        <input type="text" class="input variant-ringed-surface dark:variant-ghost-surface my-4" bind:value={$post.title}>
    </div>
{/if}
<div>
    <legend class="h3">Treść</legend>
    <div class="grid grid-rows-[1fr_auto] my-4 variant-ringed-surface dark:variant-ghost-surface overflow-hidden focus-within:variant-ringed-primary dark:focus-within:variant-ringed-primary">
        <div id="post-body-wrapper">
            <textarea id="post-body-input" class="textarea variant-ringed-surface min-h-40 border-b-0 px-4 py-2" bind:value={$post.body} on:input={processInput}></textarea>
        </div>
        <div class="shadow-[0_0_4px_0_rgba(0,0,0,.1)] grid grid-cols-[1fr_auto] pb-px px-px">
            <div>
                <div class="grid grid-cols-2 w-fit">
                    <button on:click={() => {alert(String.fromCodePoint(127757))}} class="p-1 hover:bg-grey-lighter dark:hover:variant-filled-surface">Emoji</button>
                    <button class="p-1 hover:bg-grey-lighter dark:hover:variant-filled-surface">Obraz</button>
                </div>
            </div>
            <span class="text-sm flex justify-center items-end p-1 px-2">Ilość znaków: {$post.body.replaceAll('\n', "").length}</span>
        </div>
    </div>
    <div class="pt-4">
        <legend class="h3 my-4">Podgląd</legend>
        <div bind:this={preview} class="textarea variant-ringed-surface outline-none overflow-x-auto h-full min-h-40 max-w-full px-4 py-2"></div>
    </div>
</div>

<style lang="postcss">
    :global(.hashtag, .link) {
        @apply text-blue-600;
    }
</style>
