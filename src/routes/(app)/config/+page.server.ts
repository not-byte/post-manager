import { redirect } from '@sveltejs/kit'
import { fb } from '$lib/fb'

export const actions = {
    fbLogin: () => {
        const url = fb.getAuthUrl()
        throw redirect(302, url)
    },
    fbLogout: ({ cookies }) => {
        cookies.delete("fbToken", { path: "/" })
        throw redirect(302, "/config")
    }
}