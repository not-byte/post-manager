import jwt from 'jsonwebtoken' 
import { RSA_KEY } from '$env/static/private'
import { fb } from '$lib/fb'

export async function handle({ event, resolve }) {
    const authToken = event.cookies.get("authToken")
    const fbToken = event.cookies.get("fbToken")
    try {
        // AUTH SECTION
        //==================================================================
        if(!authToken) 
            event.locals.user = undefined
        
        let authClaims = undefined
        if(authToken)
            authClaims = jwt.verify(authToken, RSA_KEY)

        if(!authClaims)
            event.locals.user = undefined

        if(authToken && authClaims) //@ts-ignore
            event.locals.user = authClaims.user
            
        // FB SECTION
        //==================================================================
        if(!fbToken) 
            event.locals.fbUser = undefined

        let fbClaims = undefined
        if(fbToken)
            fbClaims = jwt.verify(fbToken, RSA_KEY)

        if(!fbClaims)
            event.locals.fbUser = undefined

        if(fbToken && fbClaims) {
            // @ts-ignore
            event.locals.fbUser = await fb.getUserData(fbClaims.token)
        } 

        // LINKEDIN SECTION
        //==================================================================
        event.locals.inUser = undefined
    } finally {
        const response = await resolve(event)
        return response
    }
}