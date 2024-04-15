<script lang="ts">
    import { platformList, post } from "../stores";
    let selectAll = true;
    $: if(selectAll) {
        platformList.set($platformList.map(platform => { 
            platform.checked = true
            return platform
        }))
    }
    function getChecks() {
        return $post
    }
</script>

<h3 class="h3 text-center">Ustawienia</h3>
    <legend class="my-2">Wybierz platformy, na których chcesz opublikować post:</legend>
    {#key selectAll}    
        <div>
            <label for="chck" class="flex items-center space-x-2">
                <input id="chck" class="styled-checkbox" type="checkbox" bind:checked={selectAll} />
                <span>Zaznacz wszystkie</span>
            </label>
            {#each $platformList as platform, i}
                <label for="platform-checkbox{i+1}" class="flex items-center space-x-2 {selectAll ? 'brightness-75 dark:brightness-50' : ''}">
                    <input id="platform-checkbox{i+1}" class="platform-checkbox styled-checkbox disabled:cursor-default" type="checkbox" disabled={selectAll} bind:checked={platform.checked}/>
                    <span>{platform.text}</span>
                </label>
            {/each}
        </div>
    {/key}
<button on:click={() => console.log(getChecks())}>Klik</button>

<style lang="postcss">
    .styled-checkbox {
        @apply checkbox dark:bg-grey-dark checked:variant-filled-primary;
    }
</style>