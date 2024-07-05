export const ContentActions = {
    // Actions de Ordenes
    'ADD_ORDERS': 'ADD_ORDERS',
    'ADD_CURRENT_ORDER': 'ADD_CURRENT_ORDER',
    'ADD_NEW_ORDER': 'ADD_NEW_ORDER',
    'UPDATE_ORDER_STATUS':'UPDATE_ORDER_STATUS',
    // Actions de Clientes
    'ADD_CLIENTS': 'ADD_CLIENTS',
    'ADD_NEW_CLIENT': 'ADD_NEW_CLIENT',
    'UPDATE_CLIENT_INFO': 'UPDATE_CLIENT_INFO',
    'REMOVE_CLIENT': 'REMOVE_CLIENT',
    'ADD_CURRENT_CLIENT': 'ADD_CURRENT_CLIENT',
    // Actions de Entregas
    'ADD_SHIPPINGS': 'ADD_SHIPPINGS',
    'ADD_NEW_SHIPPING': 'ADD_NEW_SHIPPING',
    //Filtros de Ordenes
    'SET_FILTER':'SET_FILTER'
}

function reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case ContentActions.ADD_ORDERS:
            return {...state,
                orders:payload
            }
        case ContentActions.ADD_CURRENT_ORDER: 
            return {...state,
                order: state.orders.filter((item)=> item.orderID == payload)[0]
            }
        case ContentActions.ADD_NEW_ORDER:
            return {
                ...state,
                orders: [...state.orders, payload]
            }
        case ContentActions.ADD_CLIENTS:
            return {
                ...state,
                clients: payload
            }
        case ContentActions.ADD_NEW_CLIENT:
            return {
                ...state,
                clients:[...state.clients, payload]
            }
        case ContentActions.UPDATE_CLIENT_INFO:
            return {
                ...state,
                orders: state.orders.map((order) => {
                    
                    if (order.client.id == payload.id) {
                        return {
                            ...order,
                            client: payload
                        }
                    }
                    return order
                }),
                clients: state.clients.map((client, ind) => {
                    
                    if (client.id == payload.id) {
                        return payload
                    }
                    return client
                }),
                client: state.client == null ? null : payload
            }
        case ContentActions.ADD_CURRENT_CLIENT:
            return {
                ...state,
                client: payload
            }
        case ContentActions.REMOVE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter((val, indx) => val.id !== payload)
            }
        case ContentActions.ADD_SHIPPINGS:
            return {
                ...state,
                shippings: payload
            }
        case ContentActions.ADD_NEW_SHIPPING:
            return {
                ...state,
                shippings:[...state.shippings, payload]
            }
        case ContentActions.SET_FILTER:
            
            if (payload == 'ALL') {
                return {
                ...state,
                filterBy: payload,
                ordersByFilters: state.orders
                }
            }
            if (payload == 'ON_PROCESS') {
                return {
                    ...state,
                    filterBy: payload,
                    ordersByFilters: state.orders.filter((order) => order.status == payload)
                }
            }
            if (payload == 'COMPLETED') {
                return {
                    ...state,
                    filterBy: payload,
                    ordersByFilters: state.orders.filter((order)=> order.status == payload)
                }
            }
        case ContentActions.UPDATE_ORDER_STATUS:
            return {
                ...state,
                orders: state.orders.map((corder) => {
                    if (corder.orderID == payload.orderID) {
                        return payload
                    }
                    return corder
                }),
                ordersByFilters: state.ordersByFilters.map((corder) => {
                    if (corder.orderID == payload.orderID) {
                        return payload
                    }
                    return corder
                })
            }
        default:
            return state
    }
}
export default reducer
