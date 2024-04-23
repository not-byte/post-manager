import { redirect } from '@sveltejs/kit'
import { fb } from '$lib/fb'

export const actions = {
    fb: () => {
            const url = fb.getAuthUrl()
            throw redirect(302, url)
        }
}