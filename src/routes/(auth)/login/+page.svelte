<script lang="ts">
    import { getToastStore } from "@skeletonlabs/skeleton";
    import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';
    import StyledLightSwitch from "$lib/components/StyledLightSwitch.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import { enhance } from "$app/forms";
    import { page } from "$app/stores";
    import Eye from "~icons/ph/eye"
    import EyeClosed from "~icons/ph/eye-closed"

    const toastStore: ToastStore = getToastStore();
    let showPassword: boolean = false

    $: if($page.status != 200) {
        const t: ToastSettings = {
            message: $page.form.message,
            timeout: 5000,
            background: "variant-filled-error",
        }

        toastStore.trigger(t)
    } 
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<main class="grid gr-dcols-1 lg:grid-cols-2 h-full">
    <div class="flex justify-center lg:items-center">
        <div class="p-4 lg:p-0">
            <div class="flex w-full justify-between items-center">
                <a href="https://www.notbyte.com" class="block w-8 lg:w-16 hover:brightness-[75%] transition-[filter]">
                    <Logo gradient />
                </a>
                <StyledLightSwitch />
            </div>
            <div class="p-8">
                <h2 class="h1 mt-4 mb-1 font-bold">Witaj w notByte Dev!</h2>
                <h5 class="h5">Zaloguj się aby otrzymać dostęp do panelu deweloperskiego.</h5>
                <form use:enhance method="post" action="/login" class="my-4 lg:pl-4 lg:pr-16">
                    <legend>Nazwa użytkownika<span class="text-red-500">*</span></legend>
                    <input type="text" name="username" required class="input variant-ringed-surface dark:variant-ghost-surface mb-2 mt-1">
                    <legend>Hasło<span class="text-red-500">*</span></legend>
                    <div class="input-group variant-ringed-surface dark:variant-ghost-surface grid-cols-[1fr_auto] mt-1">
                        <input type={showPassword ? "text" : "password"} name="password" required class="input variant-ringed-surface dark:variant-ghost-surface">
                        <div class="!pl-0 !pr-3 dark:bg-surface-700">
                            <label for="show-password-checkbox" class="cursor-pointer" title={showPassword ? "Hide password" : "Show password"}>
                                <svelte:component this={showPassword ? Eye : EyeClosed} />
                            </label>
                            <input type="checkbox" id="show-password-checkbox" bind:checked={showPassword} class="hidden">
                        </div>
                    </div>
                    <button type="submit" class="btn py-2 pr-8 pl-6 mt-6 bg-colors text-white corner-br-md corner-white dark:corner-night">Zaloguj się</button>
                </form>
            </div>
        </div>
    </div>
    <div class="hidden lg:flex justify-center">
        <Logo className="max-w-[40%] text-black drop-shadow-[0_0_20px_rgba(255,255,255,.15)]" animate />
    </div>
</main>

<style lang="postcss">
    main > div:last-child {
        background-image: radial-gradient(rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40% 45%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%);
        background-size: 400% 400%;
        animation: gradientMove 30000ms ease-in-out infinite;
    }

    @keyframes gradientMove {
        0% {
            background-position: left;
        } 
        25% {
            background-position: top;
        }
        50% {
            background-position: right;
            background-size: 800% 800%;
        }
        75% {
            background-position: bottom;
        }
        100% {
            background-position: left;
            background-size: 400% 400%;
        }
    }
</style>