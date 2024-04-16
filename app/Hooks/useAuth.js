import {useContext} from 'react'
import { AuthContext } from '../Contexts/Auth'
import { AuthActions } from '../Reducers/Auth'
import {getToken} from '../Services/Auth'
import { useNavigation } from '@react-navigation/native'

function useAuth() {
    const { state, dispatch } = useContext(AuthContext)
    const navigation = useNavigation()
    const SignIn = (credentials) => {
        getToken(credentials).then((token) => {
            console.log({token})
            if (token != undefined || token != null) {
                dispatch({ type: AuthActions.ADD_TOKEN, payload: token })
                return navigation.navigate('HomeScreen')
            }
            return navigation.navigate('LoginScreen')
        })
    }
    const SignOut = () => dispatch({ type: AuthActions.REMOVE_TOKEN })
    return {
        AuthState: state,
        SignIn,
        SignOut
    }
}
export default useAuth


