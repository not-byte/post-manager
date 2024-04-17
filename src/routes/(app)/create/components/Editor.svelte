<script lang="ts">
    import { platformList, post } from "../stores";
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from "@skeletonlabs/skeleton"
    import EmojiKeyboard from "$lib/components/EmojiKeyboard.svelte";
    import EmojiIcon from "~icons/ph/smiley-wink"
    import EmojiIconFilled from "~icons/ph/smiley-wink-fill"
    import ImageIcon from "~icons/ph/image"
    import ImageIconFilled from "~icons/ph/image-fill"

    let processedPost = ""
    let isEmojiKeyboardOpen = false
    let postBodyInput: HTMLTextAreaElement
    let preview: HTMLElement;
    $: if(preview) {
        processInput()
    }

    const emojiKeyboardPopup: PopupSettings = {
        event: 'click',
        target: 'emojiKeyboardPopup',
        placement: 'bottom',
        state: (e: Record<string, boolean>) => {
            isEmojiKeyboardOpen = e.state
        },
        middleware: {
            offset: -10
        }
    };

    function processText(text: string) {
        const hashtagRegex = /#\w+/g
        const urlRegex: RegExp = /\b(?:https?|ftp):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[-A-Za-z0-9+&@#\/%=~_|]/g
        let newlines = text.replace(/\n/g, "<br>")
        let hashtags = newlines.replace(hashtagRegex, match => `<span class="hashtag">${match}</span>`)
        let links = hashtags.replace(urlRegex, match => `<a class="link" href="${match}">${match}</a>`)
        return links;
    }

    function processInput() {
        processedPost = processText($post.body)
        if(preview) {
            preview.innerHTML = processedPost
            console.log(preview.innerText)
        }
    }

    function inputEmoji(e: CustomEvent) {
        const index = postBodyInput.selectionStart
        $post.body = $post.body.slice(0, index) + String.fromCodePoint(e.detail.codePoint) + $post.body.slice(index)
        processInput()
    }
</script>

{#if $platformList[3].checked}    
    <div>
        <legend class="h3">Tytuł</legend>
        <input type="text" class="styled-input my-4" bind:value={$post.title}>
    </div>
{/if}
<div>
    <legend class="h3">Treść</legend>
    <div class="grid grid-rows-[1fr_auto] my-4 variant-ringed-surface border-0 dark:variant-ghost-surface ring-grey-light dark:!ring-grey-darker overflow-hidden focus-within:!variant-ringed-primary transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter]">
        <textarea id="post-body-input" bind:this={postBodyInput} class="textarea transition-none variant-ringed-surface !ring-0 min-h-40 px-4 py-2 !border-0" bind:value={$post.body} on:input={processInput}></textarea>
        <div class="shadow-[0_0_4px_0_rgba(0,0,0,.1)] grid grid-cols-[1fr_auto] pb-px px-px">
            <div>
                <div class="grid grid-cols-2 w-fit">
                    <button use:popup={emojiKeyboardPopup} title="{isEmojiKeyboardOpen ? "Hide" : "Show"} Emoji Keyboard" class="px-2 py-1 hover:bg-grey-lighter dark:hover:variant-filled-surface hover:!text-tertiary-500">
                        <svelte:component this={isEmojiKeyboardOpen ? EmojiIconFilled : EmojiIcon} class="transition-colors {isEmojiKeyboardOpen ? 'text-tertiary-500' : ''}" />
                    </button>
                    <button title="Upload image" class="px-2 py-1 hover:bg-grey-lighter dark:hover:variant-filled-surface hover:!text-tertiary-500">
                        <ImageIcon class="transition-colors" />
                    </button>
                </div>
            </div>
            <span class="text-xs lg:text-sm flex justify-center items-end p-1 px-2">Ilość znaków: {$post.body.replaceAll('\n', "").length}</span>
        </div>
    </div>
    <div class="pt-4">
        <legend class="h3 my-4">Podgląd</legend>
        <div bind:this={preview} class="variant-ringed-surface ring-grey-light dark:!ring-grey-darker overflow-x-auto h-full min-h-40 max-w-full px-4 py-2"></div>
    </div>
</div>
<div data-popup="emojiKeyboardPopup">
    <EmojiKeyboard on:inputEmoji={inputEmoji} />
</div>

<style lang="postcss">
    :global(.hashtag, .link) {
        @apply text-blue-600;
    }
</style>
