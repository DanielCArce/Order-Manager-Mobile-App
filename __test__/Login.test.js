import { fireEvent, render, screen } from '@testing-library/react-native'
import LoginScreen from './../app/Screens/LoginScreen.jsx';
describe('LoginScreen', () => {
    test('Should be render', () => {
        render(<LoginScreen />)
        expect(screen.getAllByTestId('email').value).toBe('')
    });
    test('First Test', function () {
        expect('11').toBe('11')
    })
});