import { createContext, useReducer } from 'react'
import AuthReducer from '../Reducers/Auth'
export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
    const [state,dispatch ] = useReducer(AuthReducer,{isAuth:false, token: null})
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}