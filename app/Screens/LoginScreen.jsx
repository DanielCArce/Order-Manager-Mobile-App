import { View, Text, TextInput, Pressable, StyleSheet, Platform, SafeAreaView  } from 'react-native'
import React, { useLayoutEffect } from 'react'
import AppHeader from '../Components/AppHeader'
import {Formik } from 'formik'
import useAuth from '../Hooks/useAuth'
import LoginSchema from './../Schemas/LoginScheme';
import { useNavigation } from '@react-navigation/native'
const LoginScreen = () => {
  const { SignIn, isTokenAvailable } = useAuth()
  const navigation = useNavigation()
  useLayoutEffect(function () {
    isTokenAvailable()
  },[])
  return (
    <SafeAreaView>
        <View style={[styles.container, Platform.OS == "web" || Platform.OS== "android" ? {marginTop:50}: null]}>
          <AppHeader moveToScreen='LoginScreen'/>
        <View style={{marginTop:161}}>
          <View>
            <Text style={[styles.texts, styles.headers]}>Iniciar Sessión</Text>
          </View>
          <Formik initialValues={{ username: '', password: '' }} onSubmit={ (values) => {
            SignIn({username:values.username, password: values.password})
          }} validationSchema={LoginSchema}>

            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
              <>
                <View style={styles.formControls}>
                  <View style={styles.fields}>
                    <Text style={[styles.texts, styles.labels]}>Usuario: {errors.username ? <Text style={{color:'red'}}>{errors.username}</Text> : null }</Text>
                  </View>
                  <View>
                    <TextInput style={styles.inputs} onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username} placeholder='Por favor escribir el correo' autoCapitalize='none' autoComplete='off' autoCorrect={ false} />
                  </View>
                </View>
                <View style={styles.formControls}>
                  <View style={styles.fields}>
                    <Text style={[styles.texts, styles.labels]}>Contraseña: {errors.password ? <Text style={{color:'red'}}>{errors.password}</Text> : null }</Text>
                  </View>
                  <View>
                    <TextInput style={styles.inputs} onBlur={handleBlur('password')} onChangeText={handleChange('password')} value={values.password} placeholder='Por favor escribir la contraseña' secureTextEntry autoCapitalize='none' autoComplete='off' autoCorrect={ false}/>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Pressable onPress={handleSubmit} disabled={isValid ? false : true}>
                    <View style={[{ paddingHorizontal: 15, paddingVertical: 8, flexGrow: 2 }, isValid ? {backgroundColor: '#51D877'} : {backgroundColor:'#dddddd'}]}>
                      <Text style={[styles.texts, { fontSize: 20 }]}>Ingresar</Text>
                    </View>
                  </Pressable>
                  <Pressable onPress={(e) => navigation.navigate('RequestNewPasswordScreen') }>
                    <View style={{ paddingHorizontal: 15, paddingVertical: 8, flex: 1 }}>
                      <Text style={[styles.texts, { fontSize: 18 }]}>Olvide Contraseña?</Text>
                    </View>
                  </Pressable>
                </View>
              </>
  )}
          </Formik>
          </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  texts: {
    color: '#000000',
    textAlign:'center'
  },
  fields: {
    marginBottom:10
  },
  formControls: {
    marginBottom:20
  },
  container: {
    paddingHorizontal: 30
  },
  headers: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight:'600'
  },
  labels: {
    textAlign: 'auto',
    fontSize:18
  },
  inputs: {
    backgroundColor: '#f3f3f3',
    // flex:1,
    borderColor: '#000000',
    paddingLeft: 10,
    borderWidth:1,
    borderRadius: 5,
    paddingVertical:5
  }
})
export default LoginScreen