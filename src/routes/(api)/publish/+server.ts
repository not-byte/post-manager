import { error, redirect } from '@sveltejs/kit'

let test = {
    message: "Before POST"
}

export async function GET({ locals }) {
    if(!locals.user)
        throw error(403, "Access denied.")

    console.log("GET")

    const res = new Response(`data: ${JSON.stringify(test)}\n\n`, {
        headers: {
            "content-type": "text/event-stream",
        }
    })

    return res
}

export async function POST({ request, locals }) {
    if(!locals.user)
        throw error(403, "Access denied.")

    const body = JSON.parse(await request.text())
    console.log(body)

    test.message = "After POST"

    return new Response("ok")
}