import {deleteItemAsync, getItemAsync, setItemAsync} from 'expo-secure-store'
import { Alert, Platform } from 'react-native'
export async function saveTokenInStorage(token) {
    if (Platform.OS !== "web") {
        await setItemAsync('AuthToken', token)
    }
    if (Platform.OS == "web") {
        localStorage.setItem('AuthToken',token)
    }

}
export async function removeTokenFromStorage() {
    if (Platform.OS !== "web") {
        await deleteItemAsync('AuthToken')
    }
    if (Platform.OS == "web") {
        localStorage.removeItem('AuthToken')
    }
}
export async function recoveryTokenFromStorage() {
    if (Platform.OS !== "web") {
        const storage = await getItemAsync('AuthToken')
    if (storage) {
        return storage
    }
        return undefined
    }
    if (Platform.OS == "web") {
        return localStorage.getItem('AuthToken')
    }
}