<script lang="ts">
    import { platformList, plannedDate } from "../stores";
    import { page } from "$app/stores";
    import { popup, SlideToggle } from "@skeletonlabs/skeleton";
    import type { PopupSettings } from "@skeletonlabs/skeleton";
    import QuestionMark from "~icons/ph/question-fill";

    const { fbUser, inUser } = $page.data
    const questionSettings: PopupSettings = {
        event: 'hover',
        target: 'questionSettings',
        placement: 'bottom',
    }

    let isPostPlanned = false;
    // let plannedDate: string | undefined = undefined;
    let selectAll = $platformList.every(platform => platform.checked);

    $: if(selectAll) {
        platformList.set($platformList.map(platform => { 
            platform.checked = true
            return platform
        }))
    }

    $: if(!isPostPlanned) {
        $plannedDate = undefined
    }

    // $: if($plannedDate) {
    //     console.log(Date.parse($plannedDate))
    // }
</script>

<div data-popup="questionSettings" class="card variant-filled-surface opacity-100 z-50 py-1 px-2">
    Musisz zalogować się na odpowiedniej platformie, aby odblokować tą opcję
</div>
<h3 class="h3 text-center">Ustawienia</h3>
<legend class="my-2">Wybierz platformy, na których chcesz opublikować post:</legend>
{#key selectAll}    
    <div>
        <label for="chck" class="flex items-center space-x-2">
            <input id="chck" class="checkbox dark:bg-grey-dark checked:variant-filled-primary" type="checkbox" bind:checked={selectAll} />
            <span>Zaznacz wszystkie</span>
        </label>
        {#each $platformList as platform, i}
            {#if (!fbUser && platform.requiredLogin === "fb") || (!inUser && platform.requiredLogin === "in")}
                <span class="flex items-center space-x-2 brightness-75 dark:brightness-50 line-through">
                    <span>{platform.text}</span>
                    <div use:popup={questionSettings}>
                        <QuestionMark class="size-4 cursor-help" />
                    </div>
                </span>
            {:else}
                <label for="platform-checkbox{i+1}" class="flex items-center space-x-2 {selectAll ? 'brightness-75 dark:brightness-50' : ''}">
                    <input id="platform-checkbox{i+1}" class="platform-checkbox checkbox dark:bg-grey-dark checked:variant-filled-primary disabled:cursor-default" type="checkbox" disabled={selectAll} bind:checked={platform.checked}/>
                    <span>{platform.text}</span>
                </label>
            {/if}
        {/each}
    </div>
{/key}
<legend class="mt-4">Zaplanuj datę opublikowania postu (nie działa na stronie)</legend>
<div class="my-2">
    <SlideToggle name="plan-post" size="sm" background="bg-grey-light dark:bg-grey-darkest" active="bg-secondary-500" bind:checked={isPostPlanned}>
        Zaplanuj post
    </SlideToggle>
</div>
{#if isPostPlanned}
    <input type="datetime-local" bind:value={$plannedDate} class="input variant-outline-surface bg-transparent border-grey-light dark:variant-ghost-surface dark:border-grey-darker focus:!border-secondary-500" />
{/if}

<style lang="postcss">
    input[type="datetime-local"]::-webkit-calendar-picker-indicator {
        @apply invert-0 dark:invert;
    }
</style>