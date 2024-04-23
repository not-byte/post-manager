import { FB_APP_SECRET } from "$env/static/private"

class FB {
    clientId: string
    pageId: string
    redirectUri: string
    configId: string
    state: string
    cachedUserData: Object | undefined

    constructor() {
        this.clientId = "896606312279052"
        this.pageId = "102391188974600"
        this.redirectUri = "http://localhost:5173/auth"
        this.configId = "1570295933762057"
        this.state = Math.random().toString(36).substring(7)
    }

    getAuthUrl() {
        return `https://www.facebook.com/v19.0/dialog/oauth?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=code&state=${this.state}&config_id=${this.configId}`
    }

    async getAccessToken(code: string) {
        const response = await fetch(`https://graph.facebook.com/v19.0/oauth/access_token?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&client_secret=${FB_APP_SECRET}&code=${code}`)
        const data = await response.json()
        return data
    }

    async getPageAccessToken(accessToken: string) {
        const response = await fetch(`https://graph.facebook.com/v19.0/${this.pageId}?fields=access_token&access_token=${accessToken}`)
        const data = await response.json()
        return data.access_token
    }

    async getLongLivedAccessToken(shortLivedToken: string) {
        const response = await fetch(`https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${this.clientId}&client_secret=${FB_APP_SECRET}&fb_exchange_token=${shortLivedToken}`)
        const data = await response.json()
        return data
    }

    async getUserData(accessToken: string) {
        if(this.cachedUserData) return this.cachedUserData

        const response = await fetch(`https://graph.facebook.com/v19.0/me?fields=id,name,picture&access_token=${accessToken}`)
        const data = await response.json()
        this.cachedUserData = data
        // console.log(data)
        return data
    }
}

export const fb = new FB()