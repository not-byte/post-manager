<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

    const dispatch = createEventDispatcher()
    const emojiSets = [
        { type: "faces", minVal:128512, maxVal: 128580 },
        { type: "faces2", minVal:129296, maxVal: 129327},
        { type: "body", minVal:128066, maxVal: 128080},
        { type: "animals", minVal:129408, maxVal: 129442},
        { type: "transport", minVal:128640, maxVal: 128676},
        { type: "misc", minVal:129494, maxVal: 129535},
	];
    let categoryIndex: number = 0
    $: selectedEmojis = processSelectedEmojis(categoryIndex)

    function processSelectedEmojis(index: number) {
        let category = emojiSets[index]
        let list = []
        for(let i = category.minVal; i < category.maxVal; i++)
            list.push(i)

        return list
    }

    function selectEmoji(codePoint: number) {
        dispatch('inputEmoji', {
            codePoint
        })
    }
</script>

<div class="card mt-2 p-1 border border-grey-light dark:border-grey-darker w-min max-h-52 grid grid-rows-[auto_1fr] shadow-md">
    <RadioGroup padding="p-0" border="border-0" background="bg-grey-lightest dark:bg-black" rounded="rounded" active="bg-colors" hover="hover:backdrop-brightness-[80%] dark:hover:bg-grey-darkest">
        {#each emojiSets as category, i}
            <RadioItem padding="w-6" bind:group={categoryIndex} title={category.type} name="category" value={i}> {String.fromCodePoint(category.minVal)} </RadioItem>
        {/each}
    </RadioGroup>
    <div class="flex overflow-auto h-full flex-wrap content-start">
        {#each selectedEmojis as selected}
            <button on:click={() => { selectEmoji(selected) }} class="w-6 text-center hover:backdrop-brightness-[80%] dark:hover:backdrop-brightness-[250%]"> { String.fromCodePoint(selected) } </button>
        {/each}
    </div>
</div>