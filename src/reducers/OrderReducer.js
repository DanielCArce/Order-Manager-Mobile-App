export const ACTIONS = {
    'SET_ORDER': 'SET_ORDER',
    'SET_ORDERS':'SET_ORDERS'
}

export function Reducer(state,action){
    switch (action.type) {
        case ACTIONS.SET_ORDER:
            return {
                ...state,
                orderId: action.payload
            }
            break;
        case ACTIONS.SET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        default: return state;
    }
}