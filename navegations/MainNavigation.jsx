import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../views/screens/HomeScreen'
import LogInScreen from '../views/screens/LoginScreen'
import SiginScreen from '../views/screens/SigninScreen'
import RequestNewPasswordScreen from '../views/screens/RequestNewPassword'
import ResetPasswordScreen from '../views/screens/ResetPassword'
import useAuth from './../hooks/useAuth';
// import { useLayoutEffect, useState } from 'react';

const Stack = createNativeStackNavigator()

function MainNavigation({ children }) {
    const {state} = useAuth()
    return (
        <Stack.Navigator initialRouteName={state.isLogged && state.token != null ? 'Home' : 'Login'} screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LogInScreen} />
            <Stack.Screen name="Sigin" component={SiginScreen}/>
            <Stack.Screen name="RequestNewPassword" component={RequestNewPasswordScreen} options={{ headerBackButtonMenuEnabled: true, headerShown: true, headerTitle: ' Forget Password', headerTintColor: '#abc213' }} />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
        </Stack.Navigator>
    )
}
export default MainNavigation