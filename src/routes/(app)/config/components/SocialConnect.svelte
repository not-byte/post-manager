<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
    import FbIcon from "~icons/logos/facebook"
    import InIcon from "~icons/logos/linkedin-icon"
    import Check from "~icons/ph/check-circle-fill"

    export let profilePicture: string | undefined = undefined;
    export let platform: "Facebook" | "LinkedIn";
    export let connected: boolean;

    const actions = {
        Facebook: "?/fb",
        LinkedIn: "?/in"
    }
</script>

<form method="post" action={`${actions[platform]}${connected ? 'Logout' : 'Login'}`} class="card relative p-4 shadow-md variant-outline-surface border w-80 { platform == "Facebook" ? "fb" : "in" }">
    {#if connected}
        <Check class="absolute top-2 right-2 size-10 text-success-500" />
    {/if}
    <div class="card-header text-center">
        <svelte:component this={ platform == "Facebook" ? FbIcon : InIcon } class="mx-auto size-28 mb-2" />
        <h3 class="h3 mb-4">
            { platform }
        </h3>
    </div>
    <section class="card-footer flex justify-center">
        <button type="submit" class="btn text-white bg-[{ platform == "Facebook" ? "#1877F2" : "rgb(10,102,194)" }] ">
            {#if connected}
                <Avatar src={profilePicture} alt={platform} class="h-6 w-6" />
            {:else}
                <svelte:component this={ platform == "Facebook" ? FbIcon : InIcon } class="size-6 [&_path:first-child]:!fill-white { platform == "Facebook" ? '[&_path:last-child]:!fill-transparent' : '' }" />
            {/if}
            <span>{ connected ? 'Wyloguj' : 'Zaloguj' } się</span>
        </button>
    </section>
</form>

<style lang="postcss">
    .fb {
        border-color: #1877F2;
    }
    .fb .btn {
        background-color: #1877F2;
    }

    .in {
        border-color: rgb(10,102,194);
    }
    .in .btn {
        background-color: rgb(10,102,194);
    }
</style>