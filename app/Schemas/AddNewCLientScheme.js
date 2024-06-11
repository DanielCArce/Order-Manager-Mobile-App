import * as Yup from 'yup'

const addNewClientScheme = Yup.object({
    name:Yup.string().required(),
    email: Yup.string().required().email(),
    type: Yup.string().oneOf(['FACTORY', 'DISTRIBUTOR']).required(),
    isFE: Yup.boolean().required()
})


export default addNewClientScheme