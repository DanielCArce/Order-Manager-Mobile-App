import * as Yup from 'yup'

const LoginFormSchema = Yup.object({
    username: Yup.string().required('Por Favor ingresa un usuario.').email('Por favor escribe un correo valido.').label('Usuario'),
    password:Yup.string().required('Por Favor ingresa un contrasena.').label('Contraseña')
})
export default LoginFormSchema;
