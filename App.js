import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import MainNavigation from './navegations/MainNavigation'
import AuthProvider from './contexts/AuthContext'
import OrderProvider from './contexts/OrderContext';
export default function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </OrderProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
