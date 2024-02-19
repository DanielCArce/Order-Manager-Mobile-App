import * as Yup from 'yup'

const RequestNewPasswordScheme = Yup.object({
    email: Yup.string().email().required('This field only accept emails')
})

export default RequestNewPasswordScheme