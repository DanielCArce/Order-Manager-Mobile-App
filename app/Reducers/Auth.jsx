export const AuthActions = {
    'ADD_TOKEN': 'ADD_TOKEN',
    'REMOVE_TOKEN': 'REMOVE_TOKEN'
}

function reducer(state, action) {
    const { type, payload } = action
    switch (type) {
        case AuthActions.ADD_TOKEN:
            return {
                ...state,
                token: payload,
                isAuth: true
            }
        case AuthActions.REMOVE_TOKEN: {
            return {
                ...state,
                token: null,
                isAuth: false
            }
        }
        default:
            return state
    }
}
export default reducer
