import {useContext} from 'react'
import { AuthContext } from '../Contexts/Auth'
import { AuthActions } from '../Reducers/Auth'
import {getToken} from '../Services/Auth'
import { useNavigation } from '@react-navigation/native'
import {saveToken, removeToken} from '../Utils/Storage'
function useAuth() {
    const { state, dispatch } = useContext(AuthContext)
    const navigation = useNavigation()
    const SignIn = (credentials) => {
        getToken(credentials).then((token) => {
            
            if (token != undefined || token != null) {
                dispatch({ type: AuthActions.ADD_TOKEN, payload: token })
                saveToken('token', token)
                return navigation.navigate('HomeScreen')
            }
            return navigation.navigate('LoginScreen')
        })
    }
    const SignOut = () => {
        dispatch({ type: AuthActions.REMOVE_TOKEN })
        removeToken()
        return navigation.navigate('LoginScreen')

    }
    const setToken = (token) => {
        
        if (token == undefined) {
            return navigation.navigate('LoginScreen')
        }
        dispatch({ type: AuthActions.ADD_TOKEN, payload: token })
        return navigation.navigate('HomeScreen')
    }
    return {
        AuthState: state,
        SignIn,
        SignOut,
        setToken
    }
}
export default useAuth


