<script lang="ts">
    import { image } from "../stores";
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import FileIcon from "~icons/ph/file-arrow-up-fill";

    let files: FileList;
    let fileOver: boolean = false;
    let link: string | undefined;

    function onChangeHandler(e: Event): void {
        const file = files[0]
        const fileURL = window.URL.createObjectURL(file);
        const btn = document.getElementById('close-image-upload')
        image.set({
            url: fileURL,
            file: file
        })

        fileOver = false;
        if(btn)
            btn.click()

        console.log('file data:', $image);
    }

    function onLinkConfirmHandler() {
        if(!link) return;

        const btn = document.getElementById('close-image-upload')

        image.set({
            url: link,
            file: undefined
        })

        link = undefined
        if(btn)
            btn.click()

        console.log('link data:', $image);
    }
</script>

<div class="card mt-2 p-4 border border-grey-light dark:border-grey-darker shadow-md text-center">
    <button id="close-image-upload" class="hidden"></button>
    <FileDropzone on:dragleave={() => { fileOver = false }} on:dragenter={() => { fileOver = true }} accept="image/jpeg, image/png" border="{fileOver ? 'invert-[50%] dark:invert-0 dark:brightness-50' : ''} !bg-transparent border-2 border-dashed border-grey-light dark:border-grey-dark active:!border-primary-500" padding="p-4 px-6" name="imageInput" bind:files={files} on:change={onChangeHandler}>
        <svelte:fragment slot="lead">
            <FileIcon class="size-12 mx-auto" />
        </svelte:fragment>
        <svelte:fragment slot="message">
            <span>Przeciągnij i upuść plik lub kliknij, aby wybrać</span>
        </svelte:fragment>
    </FileDropzone>
    <p class="my-2">lub</p>
    <legend>Podaj link do obrazu</legend>
    <div class="styled-input-group grid-cols-[1fr_auto] mt-1">
        <input id="password-input" type="url" bind:value={link} class="input variant-ringed-surface dark:variant-ghost-surface text-sm">
        <button on:click={onLinkConfirmHandler} class="btn btn-sm variant-filled-primary p-0">
            Potwierdź
        </button>
    </div>
</div>