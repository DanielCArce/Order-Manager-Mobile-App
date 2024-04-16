export async function getToken(credentials) {
    const parsedCredentials = JSON.stringify(credentials)
    const abortController = new AbortController()
    console.log({parsedCredentials, credentials})
    try {

        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/authorization`, {
            signal: abortController.signal,
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: parsedCredentials
        })
        const response = await request.json()
        const { token } = response
        return token
    } catch (error) {
        throw new Error(error.message)
    }
}