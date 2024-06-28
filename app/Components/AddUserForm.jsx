import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {Formik} from 'formik'
import { Picker } from '@react-native-picker/picker'
import useContent from '../Hooks/useContent'
function AddUserForm() {
  const {addNewUser} = useContent()
    return (
        <Formik initialValues={{ role: 'USER', name: '', email: '' }} onSubmit={(values) => addNewUser({...values})}>
            {({ setFieldValue, values, handleBlur, handleChange, handleSubmit }) => {
                return (
                    <>
                        {/* <Text>{JSON.stringify(values)}</Text> */}
                        <View style={s.formControl}>
                            <Text style={s.label}>Nombre:</Text>
                            <TextInput onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name} style={ s.input} />
                        </View>
                        <View style={s.formControl}>
                            <Text style={s.label}>Correo Electrónico:</Text>
                            <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} style={s.input } />
                        </View>
                        <View style={s.formControl}>

                            <Text style={s.label}>Rol:</Text>
                            <Picker onValueChange={(i) => setFieldValue('role', i)} style={s.input}>
                                <Picker.Item value='USER' label='Usuario' />
                                <Picker.Item value='ADMIN' label='Administrador' />
                            </Picker>
                        </View>
                        <View style={[s.buttonSection, s.formControl]}>
                        <Pressable onPress={handleSubmit} style={[s.buttonContainer,{backgroundColor:'#0080c0'}]}>
                            <Text style={[s.buttonText]}>Crear Usuario</Text>
                        </Pressable>
                        </View>
                    </>
                )
            } }
        </Formik>
    )
}
const s = StyleSheet.create({
  errorsLabel: {
    color: "red",
  },
  container: {
    flex: 1,
    gap: 15,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  formControl: {
    gap: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 20,
  },
  input: {
    flex: 0.6,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 5,
    flexBasis: 45,
  },
  buttonSection: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex:1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#f3f3f3",
  },
});
export default AddUserForm