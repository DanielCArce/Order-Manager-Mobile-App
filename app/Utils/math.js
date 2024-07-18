import { formatNumbers } from "./dateFormat"
import {Text} from 'react-native'
export const calculateUnidPrice = (size,unid, pricePerInch) => {
    if (unid == "Docena") {
            return (((size * pricePerInch) /144)  * 12 )
        }
        if (unid == "Paquete") {
            return ((size * pricePerInch) / 2)
    }
    if (unid == "Par") {
        return ((size * pricePerInch) / 144)
    }
        return ((size * pricePerInch))
}
export const calculateSubtotalPerLine = (item, pricePerInch) => {
        return calculateUnidPrice(item.size, item.unid, pricePerInch) * item.quantity
}
export const calculateTotal = (items, pricePerInch, isFE) => {
        let subtotal = items.reduce((pv, cv) => {
            return total = pv + calculateSubtotalPerLine(cv, pricePerInch)
        }, 0)
        if (isFE) {
            return (<>
                <Text>Subtotal: {formatNumbers(subtotal)}</Text>
                <Text>I.V.A.: {formatNumbers(subtotal * 0.13)}</Text>
                <Text>Total: { formatNumbers(subtotal*1.13)}</Text>
            </>)
        }
        return <Text>Total: { formatNumbers(subtotal)}</Text>
    }