import React, { useLayoutEffect } from 'react'
import {useFormik} from 'formik'
import {StyleSheet, View,Text,Button, TextInput, TouchableOpacity} from 'react-native'
import LoginFormSchema from './../schemas/LoginForm.Schema';
import useAuth from './../hooks/useAuth';
function LoginForm({navigation}) {
    const {isAuth, logIn} = useAuth();
    const { values, handleSubmit, handleChange, handleBlur, errors } = useFormik({
        initialValues: { username: 'deb@danielcarce.deb', password: 'deb-deb' }, validationSchema: LoginFormSchema, onSubmit: (values) => {
            logIn(values.username)
            values.username = '';
            values.password = '';
            navigation.navigate('Home')
        }
    })
    useLayoutEffect(() => { 
        if (isAuth) {
            navigation.navigate('Home')
        }
    },[isAuth])
  return (
      <View>
          <View style={styles.inputContainer}>
              <Text >Uuario:</Text>
              <TextInput style={styles.inputText} name="username" placeholder="Ingresa un usuario" onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username } />
              <Text style={styles.warningMessage}>{ errors.username}</Text>
          </View>
          <View style={styles.inputContainer}>
              <Text>Contraseña:</Text>
              <TextInput style={styles.inputText} name="password" placeholder="Ingresa una contraseña" onBlur={handleBlur('password')} onChangeText={handleChange('password')} value={values.password } secureTextEntry />
              <Text style={styles.warningMessage}>{errors.password}</Text>
          </View>
          <View>
              <TouchableOpacity style={ styles.button} onPress={handleSubmit}>
                  <Text style={ styles.buttonText}>Ingresar</Text>
              </TouchableOpacity>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
    warningMessage: {
        color: 'red',
        fontWeight:'bold'
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        textAlign: 'center',
        backgroundColor: '#0080c0',
        
    }, buttonText: {
        color: '#ffffff',
        fontSize: 21,
        fontWeight: 700,
    },
    inputContainer: {
        marginBottom: 12,
        flexDirection:'column'
    },
    inputText: {
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 8,
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical:4
    }
})
export default LoginForm