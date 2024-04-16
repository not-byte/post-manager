import jwt from 'jsonwebtoken' 
import { RSA_KEY } from '$env/static/private'

export async function handle({ event, resolve }) {
    const authToken = event.cookies.get("authToken")
    try {
        if(!authToken) 
            event.locals.user = undefined
        
        let claims = undefined
        if(authToken)
            claims = jwt.verify(authToken, RSA_KEY)

        if(!claims)
            event.locals.user = undefined

        if(authToken && claims) //@ts-ignore
            event.locals.user = claims.user
    } finally {
        const response = await resolve(event)
        return response
    }
}