<script lang="ts">
    export let className: string = ''
    import { modeCurrent, setModeCurrent, getModeAutoPrefers, setModeUserPrefers, getModeOsPrefers, setInitialClassState } from '@skeletonlabs/skeleton';
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    import Moon from "~icons/ph/moon-stars"
    import Sun from "~icons/ph/sun"
    import Fallback from "~icons/ph/spinner-gap-bold"

    const time = 200
    const distance = 1
    let load = false
    
    onMount(() => {
        setModeCurrent(getModeAutoPrefers());
        if (!('modeCurrent' in localStorage)) {
            console.log(getModeOsPrefers())
			setModeCurrent(getModeOsPrefers());
		}
        load = true
    })

    function onToggleHandler(): void {
		$modeCurrent = !$modeCurrent;
		setModeUserPrefers($modeCurrent);
		setModeCurrent($modeCurrent);
	}

    function lightSwitch(node: any, { delay = 0, duration, x }: { delay?: number, duration: number, x: number }) {
        return {
            duration,
            x,
            delay,
            css: (t: number) => {
                const dir = x >= 0 ? 1 : -1

                return `
                    transform: rotate(${ ( 90 - (t * 90) ) * dir }deg) translateX(${ x - (t * x) }px);
                    opacity: ${ t };
                `
            }
        }
    }
</script>

<svelte:head>
	{@html `<\u{73}cript nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();</script>`}
</svelte:head>

{#if load}
    <div class="relative size-6 {className}" in:fade={{ duration: 200 }}>
        {#key $modeCurrent}
            <button id="lightswitch" title={ `Toggle ${ $modeCurrent ? 'dark' : 'light' } mode` } class="absolute left-0 origin-bottom hover:text-primary-500 [&_*]:transition-colors [&_*]:duration-100" on:click={onToggleHandler} out:lightSwitch={{ duration: time, x: -distance }} in:lightSwitch={{ delay: time, duration: time, x: distance }}>
                <svelte:component this={$modeCurrent ? Sun : Moon} class="size-6" />
            </button>
        {/key}
    </div>
{:else}
    <Fallback class="size-6 animate-spin opacity-20" />
{/if}