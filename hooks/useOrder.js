import { useContext } from "react";
import { OrderContext } from '../contexts/OrderContext'
import { ACTIONS } from "../reducers/OrdersReducer"
export default  function useOrder() {
    const { state, dispatch } = useContext(OrderContext)
    
    const addOrders =  (payload) => {
        return  dispatch({type: ACTIONS.ADD_ORDERS, payload})
    }
    const addOrder =  (payload) => {
        return  dispatch({type:ACTIONS.ADD_ORDER,payload})
    }
    const removeOrder =  (payload) => {
        return  dispatch({type:ACTIONS.REMOVE_ORDER,payload})
    }
    const obtainOrders =  () => {
        return   state.orders
    }
    return {state, addOrder, addOrders, removeOrder, obtainOrders}
}