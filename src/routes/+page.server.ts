import { redirect } from '@sveltejs/kit'

export async function load({url}) {
    // console.log(url)
    throw redirect(301, "/create")
}