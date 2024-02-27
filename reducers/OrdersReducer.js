export const ACTIONS = {
    'SET_ORDER': 'SET_ORDER',
    'SET_ORDERS': 'SET_ORDERS',
    'REMOVE_ORDER': 'REMOVE_ORDER',
    'SET_SHIPPING': 'SET_SHIPPING',
    'SET_SHIPPINGS':'SET_SHIPPINGS'
}

export default function OrderReducer(state, action) {
    console.log({action, state})
    switch (action.type) {
        case ACTIONS.SET_ORDER:
            return {
                ...state,
                order: state.orders.filter((order)=> order.orderID == action.payload)
            }
        case ACTIONS.SET_ORDERS:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case ACTIONS.REMOVE_ORDER:
            return {
                ...state,
                orders: state.orders.filter((order)=> order.orderID != action.payload)
            }
        case ACTIONS.SET_SHIPPING:
            return {
                ...state,
                shipping: state.shippings.filter((shipping) => shipping.orderID == action.payload)
            }
        case ACTIONS.SET_SHIPPINGS:
            return {
                ...state,
                shippings:[...state.shippings, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}