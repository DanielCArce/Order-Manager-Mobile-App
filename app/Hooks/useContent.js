import { useContext } from 'react';
import useAuth from './useAuth';
import { ContentContext } from '../Contexts/Content';
import { getAllOrders, createOrder, updateOrderStatus } from '../Services/Orders';
import {createClient, deleteClientActive, getAllClients, updateClientInfo } from '../Services/Clients'
import { ContentActions } from '../Reducers/Content';
import { useNavigation } from '@react-navigation/native';
import {createNewUser} from '../Services/Auth'
import { createNewShipping, getAllShippings } from '../Services/Shippings';

function useContent() {
    const navigation = useNavigation()
    const { AuthState } = useAuth()
    const {state, dispatch} = useContext(ContentContext)
    const getOrders = () => {
        getAllOrders(AuthState.token)
            .then((orders) => dispatch({ type: ContentActions.ADD_ORDERS, payload: orders })).finally(() => {
                dispatch({type:ContentActions.SET_FILTER, payload:'ALL'})
            })
    }
    const getClients = () => {
        getAllClients(AuthState.token).then((companies)=> dispatch({type: ContentActions.ADD_CLIENTS, payload: companies}))
    }
    const setCurrentOrder = (orderID) => dispatch({ type: ContentActions.ADD_CURRENT_ORDER, payload: orderID })
    const addNewOrder = (orderInfo) => {
        createOrder(AuthState.token, orderInfo).then((newOrder) => {
            dispatch({ type: ContentActions.ADD_NEW_ORDER, payload: newOrder })
        }).then((or) => {
            return navigation.navigate('DashboardTab')
        })

    }
    const addShippingToOrder = (orderDetails) => {
        createNewShipping(AuthState.token, orderDetails).then((newShippings) => {
            dispatch({type: ContentActions.ADD_NEW_SHIPPING,payload: newShippings})
        }).then(() => {
            return navigation.navigate('DashboardTab')
        })
    }
    const setFilter = (status) => dispatch({ type: ContentActions.SET_FILTER, payload: status })
    const getShippings = () => {
        getAllShippings(AuthState.token).then((shippings) => {
            dispatch({type:ContentActions.ADD_SHIPPINGS,payload: shippings})
        })
    }
    const setCurrentClient = (companyInfo) => {
        dispatch({type: ContentActions.ADD_CURRENT_CLIENT, payload:companyInfo})
    }
    const updateClient = (clientID, payload) => {
        updateClientInfo(AuthState.token, clientID, payload).then((updatedCompany) => {
            dispatch({type:ContentActions.UPDATE_CLIENT_INFO, payload: updatedCompany})
        })
    }
    const inactiveClient = (companyID) => {
        deleteClientActive(AuthState.token, companyID).then((inclient) => {
            dispatch({type:ContentActions.REMOVE_CLIENT, payload:companyID})
        })
    }
    const addNewClient = (payload) => {
        createClient(AuthState.token, payload).then((newCompany) => {
            dispatch({type:ContentActions.ADD_NEW_CLIENT, payload:newCompany})
        }).then(() => {
            return navigation.navigate('DashboardTab')
        })
    }
    const addNewUser = (payload) => {
        createNewUser(AuthState.token, payload).then((vl) => { 
            return navigation.navigate('DashboardTab')
        })
    }
    const updateToCompletedOrder = (payload) => {
        updateOrderStatus(AuthState.token, payload).then((orderUpdated) => {
            dispatch({
                type: ContentActions.UPDATE_ORDER_STATUS,
                payload: orderUpdated
            })
        }).finally(()=> navigation.navigate('DashboardTab'))
    }
    return {
        ContentState: state,
        getOrders,
        setCurrentOrder,
        getClients,
        addNewOrder,
        setFilter,setCurrentClient,
        addShippingToOrder,
        getShippings,
        updateClient,
        inactiveClient,
        addNewClient,
        addNewUser,
        updateToCompletedOrder
    }
}
export default useContent