export interface Post {
    title: string | undefined,
    body: string,
    image: string | undefined,
    scheduledAt: string | undefined
}

export interface FbPost {
    message: string,
    link?: string | undefined,
    published: boolean,
    scheduled_publish_time?: number | undefined
}