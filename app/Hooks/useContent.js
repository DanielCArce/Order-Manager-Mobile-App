import { useContext } from 'react';
import useAuth from './useAuth';
import { ContentContext } from '../Contexts/Content';
import { getAllOrders, createOrder } from '../Services/Orders';
import {getAllClients } from '../Services/Clients'
import { ContentActions } from '../Reducers/Content';
import { useNavigation } from '@react-navigation/native';

function useContent() {
    const navigation = useNavigation()
    const { AuthState } = useAuth()
    const {state, dispatch} = useContext(ContentContext)
    const getOrders = () => {
        getAllOrders(AuthState.token)
            .then((orders) => dispatch({ type: ContentActions.ADD_ORDERS, payload: orders }))
    }
    const getClients = () => {
        getAllClients(AuthState.token).then((companies)=> dispatch({type: ContentActions.ADD_CLIENTS, payload: companies}))
    }
    const setCurrentOrder = (orderID) => dispatch({ type: ContentActions.ADD_CURRENT_ORDER, payload: orderID })
    const addNewOrder = (orderInfo) => {
        createOrder(AuthState.token, orderInfo).then((newOrder) => {
            dispatch({ type: ContentActions.ADD_NEW_ORDER, payload: newOrder })
        }).then((or) => {
            navigation.navigate('DashboardTab')
        })

    }
    const setFilter = (status) => dispatch({type:ContentActions.SET_FILTER, payload: status})
    return {
        ContentState: state,
        getOrders,
        setCurrentOrder,
        getClients,
        addNewOrder,
        setFilter
    }
}
export default useContent