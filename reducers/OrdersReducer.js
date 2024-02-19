export const ACTIONS = {
    'ADD_ORDER': 'ADD_ORDER',
    'ADD_ORDERS':'ADD_ORDERS',
    'REMOVE_ORDER': 'REMOVE_ORDER',
    'GET_ORDERS':'GET_ORDERS'
}

export default function OrderReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ORDER:
            return {
                orders:[...state.orders, action.payload]
            }
        case ACTIONS.ADD_ORDERS:
            return {
                orders:action.payload
            }
        case ACTIONS.GET_ORDERS:
            return { ...state }
        
        case ACTIONS.REMOVE_ORDER:
            return {
                orders: state.orders.filter((order) => order.id != action.payload)
            }
        default:
            return {...state}
    }
}