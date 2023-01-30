export const ACTIONS = {
    'SET_LOGIN': 'SET_LOGIN',
    'SET_TOKEN':'SET_TOKEN'
}

export function Reducer(state,action){
    switch (action.type) {
        case ACTIONS.SET_LOGIN:
            return {
                ...state,
                isAuth: action.payload
            }
            break;
        case ACTIONS.SET_TOKEN:
            return {
                ...state,
                userToken: action.payload
            }
        default: return state;
    }
}