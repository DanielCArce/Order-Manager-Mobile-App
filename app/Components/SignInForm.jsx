import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'
import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Formik } from 'formik'
import LoginSchema from './../Schemas/LoginScheme';
import { useNavigation } from '@react-navigation/native';
const SignInForm = () => {
    const { SignIn } = useAuth()
    const navigation = useNavigation()
    const handleRecoveryPassword = () => {
        return navigation.navigate('RequestNewPasswordScreen')
    }
  return (
    <Formik initialValues={{ username: '', password: '' }} onSubmit={ (values) => {
            SignIn({username:values.username, password: values.password})
          }} validationSchema={LoginSchema}>

            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid, touched }) => (
              <>
                  <View style={s.container}>
                      <View style={s.formControl}>
                          <Text style={s.label}>Correo Electrónico:</Text>
                          {touched.username && errors.username? <Text style={s.errorsLabel}>{errors.username} </Text> : null}
                          <TextInput style={s.input} onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username} placeholder="Por Favor Escribe el correo electrónico" testID='email' autoCapitalize="none"  autoCorrect={false}  />
                      </View>
                      <View style={s.formControl}>
                          <Text style={s.label}>Contraseña:</Text>
                          {touched.password && errors.password? <Text style={s.errorsLabel}>{errors.password} </Text> : null}
                          <TextInput style={s.input} onBlur={handleBlur('password')} onChangeText={handleChange('password')} secureTextEntry={true} value={ values.password} placeholder="Por Favor escribir la contraseña de ingreso" testID='password' autoCapitalize="none" autoCorrect={false} />
                      </View>
                      <View style={[s.formControl, s.buttonSection]}>
                          <Pressable onPress={handleSubmit} style={[s.buttonContainer, isValid ? {backgroundColor:'#6a994e'}: {backgroundColor:'#cad2c5'}]} testID="submmitBtn">
                              <Text style={s.buttonText}>Ingresar { JSON.stringify(isValid)}</Text>
                          </Pressable>
                          <Pressable style={s.buttonContainer} onPress={handleRecoveryPassword}>
                              <Text style={s.buttonText}>Recuperar Contraseña</Text>
                          </Pressable>
                      </View>
                </View>
              </>
  )}
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
        flexBasis: 45,
        shadowColor: '#8f8f8f',
        shadowOpacity: 0.5,
        shadowRadius: 35,
        shadowOffset: {
            height:10,
            width:2
        }
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
export default SignInForm