import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from '../screens/Login'
import HomeScreen from '../screens/Home'
import OrdenDetailScreen from '../screens/OrderDetails'
const Stack = createNativeStackNavigator()

function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='OrderDetail' component={OrdenDetailScreen} options={{headerBackTitle:'Ir a Dashboard', presentation:'modal'}} />
        </Stack.Navigator>
    )
}
export default StackNavigation