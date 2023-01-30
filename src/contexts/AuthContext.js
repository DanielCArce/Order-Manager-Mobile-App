import { createContext, useReducer } from 'react'
import {Reducer, ACTIONS} from '../reducers/AuthReducer'
export const AuthContext = createContext(null)
const initialState = {
    isAuth: false,
    userToken:null
}

function AuthProvider({children}) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <AuthContext.Provider value={{ state, dispatch, ACTIONS }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider