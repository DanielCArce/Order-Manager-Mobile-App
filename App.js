import { NavigationContainer} from '@react-navigation/native'
import * as Sentry from '@sentry/react-native';
import MainNav from './app/Navigations/MainNav';
import AuthProvider from './app/Contexts/Auth';
import ContentProvider from './app/Contexts/Content';
Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  debug:true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

function App() {
  return (<>
    <AuthProvider>
      <ContentProvider>
        <NavigationContainer>
            <MainNav/> 
        </NavigationContainer>
      </ContentProvider>
    </AuthProvider>
  </>);
}

export default Sentry.wrap(App)
// export default App