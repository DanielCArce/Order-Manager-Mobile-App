import * as SecureStore from 'expo-secure-store'
import { Alert } from 'react-native'
export async function saveTokenInStorage(token) {
    await SecureStore.setItemAsync('AuthToken', token)
}
export async function removeTokenFromStorage() {
    await SecureStore.deleteItemAsync('AuthToken')
}
export async function recoveryTokenFromStorage() {
    const storage = await SecureStore.getItemAsync('AuthToken')
    if (storage) {
        return storage
    }
    return undefined
}