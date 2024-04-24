<script lang="ts">
    import { onMount } from "svelte";
    import { post, platformList, image, plannedDate } from "../stores";
    import NotByteLogo from "$lib/components/Logo.svelte";
    import FbLogo from "~icons/logos/facebook";
    import IgLogo from "~icons/logos/instagram-icon";
    import InLogo from "~icons/logos/linkedin-icon";
    import Loader from "~icons/ph/spinner-gap-bold"
    
    const platforms = [
        {
            name: "Facebook",
            logo: FbLogo
        },
        {
            name: "Instagram",
            logo: IgLogo
        },
        {
            name: "LinkedIn",
            logo: InLogo
        },
        {
            name: "Strona",
            logo: NotByteLogo
        }
    ]

    const completePost = {
        ...$post,
        platforms: $platformList.filter(platform => platform.checked).map(platform => platform.text),
        image: $image,
        plannedDate: $plannedDate ? Date.parse($plannedDate) : undefined
    }

    onMount(() => {
        console.log("mounted", completePost)
    })
</script>

<div class="card px-8 py-2">
    <section class="card-header">
        <h3 class="h2 text-center">Publikowanie postów</h3>
    </section>
    <section class="pr-4 py-2 pl-12">
        {#each platforms as platform}
            <div class="flex items-center gap-4 my-4">
                {#if platform.name === "Strona"}
                    <NotByteLogo className="size-10" />
                {:else}
                    <svelte:component this={platform.logo} class="size-10 [&_*:first-child]:!fill-black dark:[&_*:first-child]:!fill-white { platform.name === "Facebook" ? '[&_*:last-child]:!fill-transparent' : '' }" />
                {/if}
                <h5 class="h3 text-center">{platform.name}</h5>
                <Loader class="size-4 animate-spin" />
            </div>
        {/each}
    </section>
</div>