import { writable, type Writable } from "svelte/store";

// INTERFACES 
// ========================================================
export interface Platform {
    text: string,
    checked: boolean,
    requiredLogin: "fb" | "in" | null,
    valid: boolean
}

export interface Post {
    title: string,
    body: string
}

export interface ImageObject {
    file: File | undefined,
    url: string
}

// STORES
// ========================================================
export const post = writable({
    title: "",
    body: ""
})

export const platformList: Writable<Platform[]> = writable([
    {
        text: "Facebook",
        checked: false,
        requiredLogin: "fb",
        valid: false
    },
    {
        text: "Instagram",
        checked: false,
        requiredLogin: "fb",
        valid: false
    },
    {
        text: "LinkedIn",
        checked: false,
        requiredLogin: "in",
        valid: false
    },
    {
        text: "Strona",
        checked: true,
        requiredLogin: null,
        valid: true
    },
])

export const plannedDate: Writable<string | undefined> = writable(undefined)

export const image: Writable<ImageObject | undefined> = writable(undefined)