import * as Yup from 'yup'

const LoginSchema = Yup.object({ username: Yup.string().email('Usuario tiene que ser un correo electrónico').required('Usuario es un campo requerido'),password: Yup.string().min(5,'La contraseña tiene que tener un tamaño minimo de 5').required('Contraseña es un campo requerido') })
export default LoginSchema