import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
    // console.log(locals.user, "root layout")
    throw redirect(301, "/create")
}