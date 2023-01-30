//import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/contexts/AuthContext'
import { NavigationContainer } from '@react-navigation/native';
import GlobalStackNavigation from './src/navigations/StackNavigation'
import OrderProvider from './src/contexts/OrdenContext'
export default function App() {
  return (
    <OrderProvider>
        <AuthProvider>
          <NavigationContainer>
            <GlobalStackNavigation/>
          </NavigationContainer>
        </AuthProvider>
    </OrderProvider>
);
}
