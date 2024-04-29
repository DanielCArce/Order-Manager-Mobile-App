import * as Yup from 'yup'

const ChangePasswordScheme = Yup.object({
    newPassword: Yup.string().required(),
    confirmNewPassword: Yup.string().required()
})

export default ChangePasswordScheme