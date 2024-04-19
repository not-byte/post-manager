<script lang="ts">
    export let src: string;
    export let alt: string;

    let width: number;
    let height: number;

    function processLoad(e: Event) {
        const image = new Image()
        image.src = src
        width = image.width
        height = image.height
        // console.log('Image loaded', image.height, image.width)
    }
</script>

<div class="relative size-16 rounded-lg overflow-hidden">
    <img src={src} alt={alt} on:load={processLoad} class="{width > height ? 'h-16' : 'w-16'} absolute left-0 top-0 brightness-50" />
    <button class="w-4 text-lg lg:text-xs absolute top-0 right-0 bg-transparent text-white rounded-bl-md font-bold backdrop-blur" on:click>✕</button>
</div>