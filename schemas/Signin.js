import * as Yup from 'yup'

const SigninScheme = Yup.object({
    email: Yup.string().email('Username should be an email').required('Cant be blank field'),
    password: Yup.string().required('Cant be blank field').min(5, 'Min 5 characters').max(30, 'Max 30 characters'),
    role: Yup.string().oneOf(['ADMIN', 'USER']),
    username: Yup.stirng().required().min(5).max(30),
    name: Yup.string().required()
})
export default SigninScheme