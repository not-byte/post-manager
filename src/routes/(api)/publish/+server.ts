import { error, redirect } from '@sveltejs/kit'

interface PlatformOptions {
    selected: boolean,
    status: "uploading" | "uploaded" | "failed" | "none",
    f: () => void
}

let updateFlag = false

let uploadData: Record<"Facebook" | "Instagram" | "Linkedin" | "Strona", PlatformOptions> = {
    Facebook: { selected: false, f: publishToFB, status: "none"},
    Instagram: { selected: false, f: publishToIG, status: "none"},
    Linkedin: { selected: false, f: publishToLI, status: "none"},
    Strona: { selected: false, f: publishToSite, status: "none"}
}

async function publishToFB(this: PlatformOptions) {
    this.status = "uploading"
    console.log("Publishing to Facebook")
    await sleep(1000)
    this.status = "uploaded"

    updateFlag = true
}

async function publishToIG(this: PlatformOptions) {
    this.status = "uploading"
    console.log("Publishing to Instagram")
    await sleep(1000)
    this.status = "uploaded"

    updateFlag = true
}

async function publishToLI(this: PlatformOptions) {
    this.status = "uploading"
    console.log("Publishing to Linkedin")
    await sleep(1000)
    this.status = "uploaded"

    updateFlag = true
}

async function publishToSite(this: PlatformOptions) {
    this.status = "uploading"
    console.log("Publishing to site")
    await sleep(1000)
    this.status = "uploaded"

    updateFlag = true
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export async function GET({ locals, request }) {
    if(!locals.user)
        throw error(403, "Access denied.")

    const i = 1
    let interval: NodeJS.Timeout | undefined = undefined;
    let countdown = 40000

    console.log("GET")

    const stream = new ReadableStream({
        start(controller) {
            interval = setInterval(() => {
                if(updateFlag) {
                    controller.enqueue("event: message\n")
                    controller.enqueue(`data: ${JSON.stringify(Object.entries(uploadData).filter(x => x[1].selected))}\n\n`)
                    updateFlag = false
                }

                countdown -= i

                if(countdown <= 0) {
                    console.log("Stream timed out")
                    clearInterval(interval)
                    controller.close()
                }
            }, i)

        },
        cancel() {
            console.log("Stream cancelled")
            clearInterval(interval)
        }
    })

    return new Response(stream, {
        headers: {
            "cache-control": "no-cache",
            "content-type": "text/event-stream",
            "connection": "keep-alive",
            "X-Accel-Buffering": "no"
        }
    })
}

export async function POST({ request, locals }) {
    if(!locals.user)
        throw error(403, "Access denied.")

    const body = JSON.parse(await request.text())
    console.log(body)

    updateFlag = true

    if(body.platforms) {
        body.platforms.forEach((platform: "Facebook" | "Instagram" | "Linkedin" | "Strona") => {
            uploadData[platform].selected = true
            uploadData[platform].f()
        })
    }

    return new Response("ok")
}