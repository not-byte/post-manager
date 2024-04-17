<script lang="ts">
    import SignOut from "~icons/ph/sign-out" 
</script>

<div class="card variant-outline-surface p-1">
    <form method="post" action="/login?/logout">
        <button type="submit" class="btn dark:variant-filled-surface">
            <span>Wyloguj się</span>
            <span>
                <svelte:component this={SignOut} class="size-6" />
            </span>
        </button>
    </form>
</div>