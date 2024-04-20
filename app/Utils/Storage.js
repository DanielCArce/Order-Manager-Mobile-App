import * as SecureStore from 'expo-secure-store'
import { Alert } from 'react-native'
export async function saveToken(key, value) {
    return await SecureStore.setItemAsync(key, value)
}
export async function obtainToken(key) {
    let storage = await SecureStore.getItemAsync(key)
    if (storage) {
        return storage
    }
}
export async function removeToken() {
    await SecureStore.deleteItemAsync('token')
}