import {useContext} from 'react'
import { AuthContext } from '../Contexts/Auth'
import { AuthActions } from '../Reducers/Auth'
import {getToken} from '../Services/Auth'
import { useNavigation } from '@react-navigation/native'
import {recoveryTokenFromStorage, removeTokenFromStorage, saveTokenInStorage} from '../Utils/Storage'
function useAuth() {
    const { state, dispatch } = useContext(AuthContext)
    const navigation = useNavigation()
    const SignIn = (credentials) => {
        getToken(credentials).then((token) => {
            if (token != undefined || token != null) {
                dispatch({ type: AuthActions.ADD_TOKEN, payload: token })
                saveTokenInStorage(token).then(function (v) {
                    return navigation.navigate('HomeScreen')
                })
            }
            return navigation.navigate('LoginScreen')
        })
    }
    const SignOut = () => {
        dispatch({ type: AuthActions.REMOVE_TOKEN })
        removeTokenFromStorage().then(function () {
            return navigation.navigate('LoginScreen')
        })
    }
    const isTokenAvailable = () => {
        recoveryTokenFromStorage().then(function(toke){
            if (toke == undefined) {
                return navigation.navigate('LoginScreen')
            }
            dispatch({ type: AuthActions.ADD_TOKEN, payload: toke })
            return navigation.navigate('HomeScreen')
        })
    }
    return {
        AuthState: state,
        SignIn,
        SignOut,
        isTokenAvailable
    }
}
export default useAuth


