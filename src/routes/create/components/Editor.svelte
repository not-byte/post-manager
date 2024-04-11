<script lang="ts">
    import { platformList, post } from "../stores";

    // TODO: add processing hashtags and links

    function processPaste(e: Event) {
        e.preventDefault()
        let pastedText = ""
        // @ts-ignore
        pastedText = (e.clipboardData || window.clipboardData).getData("text");

        if(e.target)
        {
            // @ts-ignore 
            e.target.innerHTML = pastedText.replace(/\n/g, "<br>")
            $post.body = pastedText
        }

        console.log(pastedText)
    }
</script>

{#if $platformList[3].checked}    
    <div>
        <legend class="h3">Tytuł</legend>
        <input type="text" class="input variant-ringed-surface dark:variant-ghost-surface my-4" bind:value={$post.title}>
    </div>
{/if}
<div>
    <legend class="h3 mt-4">Treść</legend>
    <div class="grid grid-rows-[1fr_auto] my-4 variant-ringed-surface dark:variant-ghost-surface overflow-hidden focus-within:variant-ringed-primary dark:focus-within:variant-ringed-primary">
        <div on:paste={processPaste} contenteditable="true" bind:innerText={$post.body} class="!bg-transparent border-b-0 outline-none overflow-x-auto h-full min-h-40 max-w-full px-4 py-2"></div>
        <div class="shadow-[0_0_4px_0_rgba(0,0,0,.1)] grid grid-cols-[1fr_auto] pb-px px-px">
            <div>
                <div class="grid grid-cols-2 w-fit">
                    <button class="p-1 hover:bg-grey-lighter dark:hover:variant-filled-surface">Emoji</button>
                    <button class="p-1 hover:bg-grey-lighter dark:hover:variant-filled-surface">Obraz</button>
                </div>
            </div>
            <span class="text-sm flex justify-center items-end p-1 px-2">Ilość znaków: {$post.body.replaceAll('\n', "").length}</span>
        </div>
    </div>
</div>
