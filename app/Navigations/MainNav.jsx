import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from '../Hooks/useAuth'
const MainNavStack = createNativeStackNavigator()
import HomeScreen from './../Screens/HomeScreen'
import LoginScreen from './../Screens/LoginScreen'
import OrderDetailScreen from '../Screens/OrderDetailScreen'
import NewOrderScreen from '../Screens/NewOrderScreen'
import RequestNewPassword from '../Screens/RequestNewPasswordScreen'
import ChangePasswordScreen from './../Screens/ChangePasswordScreen';
import NewShippingScreen from '../Screens/NewShippingScreen'
import ReviewShippingScreen from '../Screens/ReviewShippingScreen'
import AddNewUserScreen from '../Screens/AddNewUserScreen'
import { useEffect } from 'react'
import AddNewCompanyScreen from '../Screens/AddNewCompanyScreen'
function MainNav({ children }) {
    const { AuthState, isTokenAvailable } = useAuth()
    useEffect(function () {
        isTokenAvailable()
    },[])
    return (
        <MainNavStack.Navigator initialRouteName={(AuthState.isAuth== true && AuthState.token != null)? 'HomeScreen':'LoginScreen'}>
            <MainNavStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
            <MainNavStack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <MainNavStack.Screen name='OrderDetailScreen' component={OrderDetailScreen} options={{ headerTitle: 'Detalle de Orden' }} />
            <MainNavStack.Screen name='NewOrderScreen' component={NewOrderScreen} options={{ headerTitle: 'Nueva Orden' }}/>
            <MainNavStack.Screen name="RequestNewPasswordScreen" component={RequestNewPassword} options={{headerShown:false}}/>
            <MainNavStack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerTitle:' Cambiar Contraseña'}} />
            <MainNavStack.Screen name="ReviewShippingScreen" component={ReviewShippingScreen} options={{ headerTitle: 'Entregas' }} />
            <MainNavStack.Screen name="AddShippingScreen" component={NewShippingScreen} options={{ headerTitle: 'Nueva Entrega' }} />
            <MainNavStack.Screen name="AddNewUserScreen" component={AddNewUserScreen} options={{ headerTitle: 'Crear Nuevo Usuario' }} />
            <MainNavStack.Screen name="AddNewClientScreen" component={AddNewCompanyScreen} options={{ headerTitle: 'Crear Nuevo Cliente' }}/>
        </MainNavStack.Navigator>
    )
}
export default MainNav