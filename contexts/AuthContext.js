import AuthReducer, { ACTIONS } from "../reducers/AuthReducer";
import { createContext, useReducer } from "react";
export const AuthContext = createContext(null)
const initialState = {
    isLogged: true,
    token: '12312'
}
function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(AuthReducer,initialState)
    return (
        <AuthContext.Provider value={{state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider