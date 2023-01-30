import { createContext, useReducer } from 'react'
import {Reducer, ACTIONS} from '../reducers/OrderReducer'
export const OrderContext = createContext(null)
const initialState = {
    orderId: null,
    orders: []
}

function OrderProvider({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <OrderContext.Provider value={{ state, dispatch, ACTIONS }}>
            {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider