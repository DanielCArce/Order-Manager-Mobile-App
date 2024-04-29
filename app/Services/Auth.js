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
        if (request.status == 200) {
            const response = await request.json()
            
            const { token } = response
            return token
            
        }
        if (request.status == 401) {
            Alert.alert('Error Al Ingresar Al Sistema','Usuario o Contraseña INCORRECTA')
        }
        
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
        if (request.status == 200) {
            return Alert.alert('Recuperación de Contrase','Si el correo ingresado corresponde a ')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}
export async function renewPassword(token, newPassword) {
    const abortController = new AbortController()
    try {
        const request = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/users/update-password`, {
            signal: abortController.signal,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`
            },
            body: JSON.stringify({newPassword})
        })
        if (request.status == 200) {
            return Alert.alert('Contraseña Cambiada','Se cambio con exito la contraseña.')
        }
    } catch (error) {
        throw new Error(error.message)
    }
}