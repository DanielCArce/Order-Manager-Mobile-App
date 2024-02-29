import { NavigationContainer} from '@react-navigation/native'
import MainNavigation from './navegations/MainNavigation'
import AuthProvider from './contexts/AuthContext'
import OrderProvider from './contexts/OrderContext';
import * as Sentry from '@sentry/react-native';
Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug:true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

function App() {
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

export default Sentry.wrap(App)
// export default App