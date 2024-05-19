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
it('Check if Component Email', function () {
    render(<ComponentForTest/>)
    expect(screen.getByTestId('email')).toBeTruthy()

})