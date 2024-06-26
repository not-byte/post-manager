import jwt from 'jsonwebtoken'
import { RSA_KEY } from '$env/static/private'
import { redirect, fail } from '@sveltejs/kit'
import type { User } from '$types/user'

// Statically typed for now, will be pulled from db obviously
const testUser: User = {
    username: "test",
    password: "123"
}

export async function load({ locals }) {
    if(locals.user)
        throw redirect(301, "/")
    
    return { 
        user: locals.user
    }
}

export const actions = {
    login: async({ cookies, request }) => {
        const formData = await request.formData()
        const loginData = {
            username: await formData.get("username"),
            password: await formData.get("password")
        }

        if(loginData.password == testUser.password && loginData.username == testUser.username) {
            const authToken = jwt.sign({user: testUser}, RSA_KEY, {expiresIn: "30d"})
            cookies.set("authToken", authToken, { httpOnly: true, maxAge: 3600 * 24 * 30, path: "/", secure: false })

            throw redirect(301, "/")
        }
        else {
            return fail(400, {
                message: "Incorrect login data."
            })
        }
    },
    logout: async({ cookies }) => {
        cookies.delete("authToken", { path: "/" })
        cookies.delete("fbToken", { path: "/" })
        throw redirect(302, "/login")
    }
}