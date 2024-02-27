import { useContext } from "react";
import { OrderContext } from '../contexts/OrderContext'
import { ACTIONS } from "../reducers/OrdersReducer"
export default  function useOrder() {
    const { state, dispatch } = useContext(OrderContext)
    const addCurrentOrder = (payload) => dispatch({type:ACTIONS.SET_ORDER,payload})
    const addOrders = (payload) => dispatch({ type: ACTIONS.SET_ORDERS, payload })
    const removeOrder = (payload) => dispatch({ type: ACTIONS.REMOVE_ORDER, payload })
    const addCurrentShipping = (payload) => dispatch({ type: ACTIONS.SET_SHIPPING, payload })
    const addShippings = (payload) => dispatch({ type: ACTIONS.SET_SHIPPINGS, payload })
    const getOrder = () => state.order
    const getOrders = () => state.orders
    const getShipping = () => state.shipping
    const getShippings = () => state.shippings
    return {
        addCurrentOrder,
        addOrders,
        removeOrder,
        addCurrentShipping,
        addShippings,
        getOrder,
        getOrders,
        getShipping,
        getShippings
    }
}