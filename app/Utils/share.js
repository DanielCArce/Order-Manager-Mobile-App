import { shareAsync } from "expo-sharing";
import { captureRef } from "react-native-view-shot";
export function shareButton(ref) {
    captureRef(ref).then((uri) => {
        shareAsync(uri)
    }).catch((e) => {
        console.log({e})
    })
}