import { render, screen, fireEvent } from '@testing-library/react-native'
import LoginScreen from '../views/screens/LoginScreen'
describe('Render Login', function(){

    it('Test if button gone disabled when click', function () {
        render(<LoginScreen/>)
        const button = screen.getAllByTestId('LoginButton')
        expect(button.disabled).toBe(true)

    })

})