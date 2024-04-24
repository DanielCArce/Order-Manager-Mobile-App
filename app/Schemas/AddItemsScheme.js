import * as Yup from 'yup'

const AddItemScheme = Yup.object({
    size: Yup.number().required(),
    quantity: Yup.number().required(),
    description: Yup.string().required(),
    unid: Yup.string().oneOf(['Paquete', 'Docena', 'Par']),
    type: Yup.string().oneOf(['Plano','Redondo'])
})

export default AddItemScheme