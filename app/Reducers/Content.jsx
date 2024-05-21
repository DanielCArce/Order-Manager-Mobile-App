export const ContentActions = {
    // Actions de Ordenes
    'ADD_ORDERS': 'ADD_ORDERS',
    'ADD_CURRENT_ORDER': 'ADD_CURRENT_ORDER',
    'ADD_NEW_ORDER': 'ADD_NEW_ORDER',
    // Actions de Clientes
    'ADD_CLIENTS': 'ADD_CLIENTS',
    'ADD_NEW_CLIENT': 'ADD_NEW_CLIENT',
    'UPDATE_CLIENT_INFO':'UPDATE_CLIENT_INFO',
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
            let uclient = state.clients.map((v, ind, arr) => {
                if (v.id == payload.id) {
                    return payload
                }
            })
            return {
                ...state,
                clients: [...state.clients, uclient]
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
            return {
                ...state,
                filterBy: payload
            }
        default:
            return state
    }
}
export default reducer
