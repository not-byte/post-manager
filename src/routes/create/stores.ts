import { writable } from "svelte/store";

// INTERFACES 
// ========================================================
export interface Platform {
    text: string,
    checked: boolean,
    icon: string
}

export interface Post {
    title: string,
    body: string
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
        icon: ""
    },
    {
        text: "Instagram",
        checked: true,
        icon: ""
    },
    {
        text: "LinkedIn",
        checked: true,
        icon: ""
    },
    {
        text: "Strona",
        checked: true,
        icon: ""
    },
])