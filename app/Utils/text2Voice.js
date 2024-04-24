import { speak } from 'expo-speech'

export function readLoud(text) {
    speak(text,{language:'es-cr', volume:10})
}