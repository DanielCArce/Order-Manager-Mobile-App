import * as Yup from 'yup'

const LoginScheme = Yup.object({
    username: Yup.string().email('Username should be an email').required('Cant be blank field'),
    password: Yup.string().required('Cant be blank field').min(5, 'Min 5 characters').max(30, 'Max 30 characters'),
    // type: Yup.string().required().oneOf(['ADMIN', 'USER'])
})
export default LoginScheme