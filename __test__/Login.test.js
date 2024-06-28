import { fireEvent, render, screen } from '@testing-library/react-native'
import LoginScreen from '../app/Components/SignInForm'
import AuthProvider from '../app/Contexts/Auth'
import { NavigationContainer } from '@react-navigation/native'

const ComponentForTest = () => (
    <AuthProvider>
        <NavigationContainer>
        <LoginScreen/>
        </NavigationContainer>
    </AuthProvider>
)
describe('Login Form', function () {
    it('Login Form have email field', () => {
        render(<ComponentForTest />)
        expect(screen.getAllByTestId('email')).toBeTrusly()
    });
})cd