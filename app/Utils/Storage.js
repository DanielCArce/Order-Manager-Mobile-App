import {deleteItemAsync, getItemAsync, setItemAsync} from 'expo-secure-store'
import { Alert } from 'react-native'
export async function saveTokenInStorage(token) {
    await setItemAsync('AuthToken', token)
}
export async function removeTokenFromStorage() {
    await deleteItemAsync('AuthToken')
}
export async function recoveryTokenFromStorage() {
    const storage = await getItemAsync('AuthToken')
    if (storage) {
        return storage
    }
    return undefined
}