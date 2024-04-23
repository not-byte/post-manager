<script lang="ts">
    import SocialConnect from "./components/SocialConnect.svelte";
    import { page } from "$app/stores"

    const { fbUser, inUser } = $page.data
    const fbProfilePictureUrl = fbUser?.picture?.data?.url
</script>

<div class="p-6 lg:p-8 lg:px-16 text-center lg:text-left overflow-x-auto">
    <h1 class="h1 mb-1">Połączone konta</h1>
    <h3 class="text-lg mb-4">Aby korzystać z poszczególnych platform musisz być zalogowany poniżej</h3>
    <div class="flex justify-center lg:justify-start gap-8">
        {#if fbUser}
            <SocialConnect platform="Facebook" connected={true} profilePicture={fbProfilePictureUrl} />
        {:else}
            <SocialConnect platform="Facebook" connected={false} />
        {/if}
        {#if !inUser}
            <SocialConnect platform="LinkedIn" connected={false} />
        {/if}
    </div>
</div>