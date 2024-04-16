import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
    // console.log(locals.user, "app layout")
    if(!locals.user)
        throw redirect(301, "/login")
    
    return { user: locals.user }
}