import { Alert } from "react-native"

export async function getToken(credentials) {
    const parsedCredentials = JSON.stringify(credentials)
    const abortController = new AbortController()
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
export async function resendPassword(username) {
    const parsedCredentials = JSON.stringify({ username })
    const abortController = new AbortController()
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/recovery-password`, {
         signal: abortController.signal,
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: parsedCredentials   
        })
        if (response.status == 200) {
            Alert.alert('Recuperación de Contrase','Si el correo ingresado corresponde a ')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}