import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'
import { ACTIONS } from "../reducers/AuthReducer"
import { useNavigation } from '@react-navigation/native';
export default function useAuth() {
    const navigation = useNavigation()
    const { state, dispatch } = useContext(AuthContext)
    const login = (token) => {
        dispatch({ type: ACTIONS.SignIn, payload: token })
        navigation.navigate('Home',{params:{userToken:token},screen:'DashboardTab'})
    }
    const logout = () => {
        dispatch({ type: ACTIONS.SignOut, payload: null })
        navigation.navigate('Login')
        
    }
    const requestNewPassword = (email) =>{

    }
    const isAuthenticated = ()=>{
        return dispatch({type:ACTIONS.VerifyToken})
    }
    return {state, login, logout, isAuthenticated}
}