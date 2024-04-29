import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from '../Hooks/useAuth'
const MainNavStack = createNativeStackNavigator()
import HomeScreen from './../Screens/HomeScreen'
import LoginScreen from './../Screens/LoginScreen'
import OrderDetailScreen from '../Screens/OrderDetailScreen'
import NewOrderScreen from '../Screens/NewOrderScreen'
import RequestNewPassword from '../Screens/RequestNewPasswordScreen'
import ChangePasswordScreen from './../Screens/ChangePasswordScreen';
function MainNav({ children }) {
    const {AuthState} = useAuth()
    return (
        <MainNavStack.Navigator initialRouteName={(AuthState.isAuth== true && AuthState.token != null)? 'HomeScreen':'LoginScreen'}>
            <MainNavStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
            <MainNavStack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <MainNavStack.Screen name='OrderDetailScreen' component={OrderDetailScreen} options={{ headerTitle: 'Detalle de Orden' }} />
            <MainNavStack.Screen name='NewOrderScreen' component={NewOrderScreen} options={{ headerTitle: 'Nueva Orden' }}/>
            <MainNavStack.Screen name="RequestNewPasswordScreen" component={RequestNewPassword} options={{headerShown:false}}/>
            <MainNavStack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerTitle:' Cambiar Contraseña'}} />
        </MainNavStack.Navigator>
    )
}
export default MainNav