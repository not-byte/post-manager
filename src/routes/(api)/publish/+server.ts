export async function POST({ request }) {
    const body = JSON.parse(await request.text())
    console.log(body)

    return new Response(JSON.stringify({ success: true }), {
        headers: {
            "content-type": "application/json"
        }
    })
}