import { writable, type Writable } from "svelte/store";

// INTERFACES 
// ========================================================
export interface Platform {
    text: string,
    checked: boolean,
    requiredLogin: "fb" | "in" | null
}

export interface Post {
    title: string,
    body: string
}

export interface ImageObject {
    file: File,
    url: string
}

// STORES
// ========================================================
export const post = writable({
    title: "",
    body: ""
})

export const platformList = writable([
    {
        text: "Facebook",
        checked: true,
        requiredLogin: "fb"
    },
    {
        text: "Instagram",
        checked: true,
        requiredLogin: "fb"
    },
    {
        text: "LinkedIn",
        checked: true,
        requiredLogin: "in"
    },
    {
        text: "Strona",
        checked: true,
        requiredLogin: null
    },
])

export const image: Writable<ImageObject | undefined> = writable(undefined)