import { useContext } from 'react';
import useAuth from './useAuth';
import { ContentContext } from '../Contexts/Content';
import { getAllOrders } from '../Services/Orders';
import {getAllClients } from '../Services/Clients'
import { ContentActions } from '../Reducers/Content';

function useContent() {
    const { AuthState } = useAuth()
    const {state, dispatch} = useContext(ContentContext)
    const getOrders = () => {
        getAllOrders(AuthState.token)
            .then((orders) => dispatch({ type: ContentActions.ADD_ORDERS, payload: orders }))
    }
    const getClients = () => {
        getAllClients(AuthState.token).then((companies)=> dispatch({type: ContentActions.ADD_CLIENTS, payload: companies}))
    }
    const setCurrentOrder = (orderID) => dispatch({type: ContentActions.ADD_CURRENT_ORDER, payload: orderID})
    return {
        ContentState: state,
        getOrders,
        setCurrentOrder,
        getClients
    }
}
export default useContent