import * as Yup from 'yup'
const requestScheme = Yup.object({
    username: Yup.string().email().required()
})
export default requestScheme