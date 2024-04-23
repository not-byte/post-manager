import { redirect } from '@sveltejs/kit'
import { RSA_KEY } from '$env/static/private'
import { fb } from '$lib/fb'
import jwt from 'jsonwebtoken'

interface ParamObject {
    state: string | null
    code: string | null
    error: string | null
    error_code: string | null
    error_reason: string | null
    error_description: string | null
}

export async function GET({ url, cookies }) {
    let params: ParamObject = {
        state: null,
        code: null,
        error: null,
        error_code: null,
        error_reason: null,
        error_description: null
    }
    Object.keys(params).forEach((key: any) => {
        // @ts-ignore
        params[key] = url.searchParams.get(key)
    })

    if(params.error) {
        // TODO: add error page
        console.log({
            error: params.error,
            error_code: params.error_code,
            error_reason: params.error_reason,
            error_description: params.error_description
        })

        throw redirect(301, "/config")
    }

    if(params.code) {
        const slToken = await fb.getAccessToken(params.code)
        const llToken = await fb.getLongLivedAccessToken(slToken.access_token)
        const pageToken = await fb.getPageAccessToken(llToken.access_token)
        const token = jwt.sign({ 
            token: llToken.access_token,
            pageToken: pageToken
        }, RSA_KEY, { expiresIn: llToken.expires_in })

        cookies.set("fbToken", token, { httpOnly: true, maxAge: llToken.expires_in, path: "/", secure: false })
    }

    // console.log(params)
    throw redirect(301, "/config")
}