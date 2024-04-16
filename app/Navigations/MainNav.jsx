import { createNativeStackNavigator } from '@react-navigation/native-stack'
import useAuth from '../Hooks/useAuth'
const MainNavStack = createNativeStackNavigator()
import HomeScreen from './../Screens/HomeScreen'
import LoginScreen from './../Screens/LoginScreen'
import OrderDetailScreen from '../Screens/OrderDetailScreen'


function MainNav({ children }) {
    const {AuthState} = useAuth()
    return (
        <MainNavStack.Navigator initialRouteName={(AuthState.isAuth== true && AuthState.token != null)? 'HomeScreen':'LoginScreen'}>
            <MainNavStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}}/>
            <MainNavStack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
            <MainNavStack.Screen name='OrderDetailScreen' component={OrderDetailScreen} options={{headerTitle:'Detalle de Orden'}}/>
        </MainNavStack.Navigator>
    )
}
export default MainNav