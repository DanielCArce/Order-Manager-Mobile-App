export const ACTIONS = {
    'SignIn': 'SignIn',
    'SignOut': 'SignOut',
    'VerifyToken':'VerifyToken'
}

export default function AuthReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SignIn:
            return {
                ...state,
                isLogged: true,
                token: action.payload
            }
        case ACTIONS.SignOut:
            return {
                ...state,
                isLogged: false,
                token: null
            }
        case ACTIONS.VerifyToken:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}