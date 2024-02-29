import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'
import { ACTIONS } from "../reducers/AuthReducer"
import { useNavigation } from '@react-navigation/native';
import {getToken } from '../services/auth'
export default function useAuth() {
    const navigation = useNavigation()
    const { state, dispatch } = useContext(AuthContext)
    const login = async (credentials) => {
        const token = await getToken(credentials)
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
        console.log(dispatch({type:ACTIONS.VerifyToken}))
        return state.isAuth
    }
    return {state, login, logout, isAuthenticated}
}