import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import {Formik} from 'formik'
import { Picker } from '@react-native-picker/picker'
function AddUserForm() {
    return (
        <Formik initialValues={{ role: 'USER', name: '', email: '' }} onSubmit={(values) => console.log({ values })}>
            {({ setFieldValue, values, handleBlur, handleChange, handleSubmit }) => {
                return (
                    <>
                        <Text>{JSON.stringify(values)}</Text>
                        <View>
                            <Text>Nombre:</Text>
                            <TextInput onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name} />
                        </View>
                        <View>
                            <Text>Correo Electrónico:</Text>
                            <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                        </View>
                        <View>

                            <Text>Rol:</Text>
                            <Picker onValueChange={(i) => setFieldValue('role', i)}>
                                <Picker.Item value='USER' label='Usuario' />
                                <Picker.Item value='ADMIN' label='Administrador' />
                            </Picker>
                        </View>
                        <Pressable onPress={handleSubmit}>
                            <Text>Crear Usuario</Text>
                        </Pressable>
                    </>
                )
            } }
        </Formik>
    )
}

export default AddUserForm