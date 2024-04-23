<script lang="ts">
    import FbIcon from "~icons/logos/facebook"
    import { page } from "$app/stores"

    const { fbUser } = $page.data
</script>

<div class="p-6 lg:p-8 lg:px-16 overflow-x-auto">
    {#if fbUser}
        <h3 class="h3 mb-4">
            Witaj {fbUser.name}!
        </h3>
    {:else}
        <form on:submit={() => { console.log("Form submitted") }} method="post" action="?/fb">
            <h3 class="h3 mb-4">
                Zaloguj się na Facebooku, aby kontynuować
            </h3>
            <button type="submit" class="btn bg-[#1877F2]">
                <FbIcon class="size-6 [&_path:first-child]:!fill-white [&_path:last-child]:!fill-transparent" />
                <span>Zaloguj się</span>
            </button>
        </form>
    {/if}
</div>