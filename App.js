import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import MainNavigation from './navegations/MainNavigation'
import AuthProvider from './contexts/AuthContext'
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
      <MainNavigation/>
      </NavigationContainer>
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
