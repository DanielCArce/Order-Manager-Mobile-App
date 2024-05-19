import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Formik } from 'formik'
import RequestNewPasswordScheme from '../Schemas/RequestNewPassowrdScheme'
import { useNavigation } from '@react-navigation/native'
const ResetPasswordForm = () => {
    const { forgetPassword } = useAuth()
    const navigator = useNavigation()
    const backToLogin = () => {
        return navigator.navigate('LoginScreen')
    }
  return (
		  <Formik initialValues={{ username: '' }} validationSchema={RequestNewPasswordScheme} onSubmit={(values) => {
			  forgetPassword(values.username)
		  }}>
			  {({ values, handleBlur, handleChange, handleSubmit, errors, touched, isValid }) => {
              return (
                      <View style={s.container}>
                      <View style={s.formControl}>
                          <Text style={s.label}>Correo Electrónico:</Text>
                          {errors.username && touched.username ? <Text style={s.errorsLabel}>{errors.username} </Text> : null}
                          <TextInput style={s.input} onBlur={handleBlur('username')} onChange={handleChange('username')} value={values.username} placeholder="Por Favor Escribe el correo electrónico"/>
                      </View>
                      <View style={[s.formControl, s.buttonSection]}>
                          <Pressable onPress={handleSubmit} style={[s.buttonContainer, isValid ? {backgroundColor:'#6a994e'}: {backgroundColor:'#cad2c5'}]}>
                              <Text style={s.buttonText}>Recuperar Contraseña</Text>
                          </Pressable>
                          <Pressable style={s.buttonContainer} onPress={backToLogin}>
                              <Text style={s.buttonText}>Regresar al Inicio</Text>
                          </Pressable>
                      </View>
                </View>
				  )
			  }}
	  </Formik>
  )
}
const s = StyleSheet.create({
    errorsLabel: {
        color:'red'
    },
    container: {
        flex: 1,
        width: '100%',
        gap:15,
        justifyContent:'center'
    },
    formControl: {
gap:10    },
    label: {
        fontWeight: '500',
        fontSize:20
    },
    input:{
        flex:0.6,
        borderWidth: 1,
        borderRadius: 6,
        paddingLeft: 5,
        flexBasis: 45
    },
    buttonSection: {
        flexDirection:'row'
    },
    buttonContainer: {
        width:'50%',
        height:45,
        paddingVertical: 5,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignContent:'center'
    },
    buttonText: {
        textAlign: 'center'
    }
})
export default ResetPasswordForm