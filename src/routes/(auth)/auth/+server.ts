import { redirect, error } from '@sveltejs/kit'
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
        console.log({
            error: params.error,
            error_code: params.error_code,
            error_reason: params.error_reason,
            error_description: params.error_description
        })

        throw error(500, `Facebook authentication failed: ${params.error_description}`)
    }

    if(params.code) {
        const slToken = await fb.getAccessToken(params.code)
        const llToken = await fb.getLongLivedAccessToken(slToken.access_token)
        // console.log(slToken, llToken)
        const pageToken = await fb.getPageAccessToken(llToken.access_token)
        const token = jwt.sign({ 
            token: llToken.access_token,
            pageToken: pageToken
        }, RSA_KEY, { expiresIn: llToken.expires_in ? llToken.expires_in : '60d'})

        cookies.set("fbToken", token, { httpOnly: true, maxAge: llToken.expires_in ? llToken.expires_in : 3600*24*60, path: "/", secure: false })
    }

    // console.log(params)
    throw redirect(301, "/config")
}