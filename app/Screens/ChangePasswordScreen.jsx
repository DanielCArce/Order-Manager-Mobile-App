import { View, Text, SafeAreaView, TextInput, Pressable, StyleSheet, Alert } from 'react-native'
import React from 'react'
import ChangePasswordScheme from './../Schemas/ChangePasswordSheme';
import { Formik } from 'formik';
import useAuth from './../Hooks/useAuth';
const ChangePasswordScreen = () => {
    const {changePassword} = useAuth()
  return (
      <SafeAreaView style={{flex:1}}>
          <Formik initialValues={{
              newPassword: '',
              confirmNewPassword:''
          }}
              validationSchema={ChangePasswordScheme}
              onSubmit={(values) => {
                  if (values.newPassword == values.confirmNewPassword) {
                      changePassword(values.newPassword)
                  }
                  if(values.newPassword != values.confirmNewPassword){
                Alert.alert('Contraseñas no coinciden','La contraseña y la confirmación no coinciden')}
              }}
          >
              {
                  ({values, handleBlur, handleChange, handleSubmit, isValid }) => {
                      return (
                          <>
                              {/* <Text>{ JSON.stringify(values)}</Text> */}
                              <View style={styles.container}>
                                  <View style={styles.formControl}>
                                      <Text style={[styles.formControl,{fontSize:24, textAlign:'center', fontWeight:'600'}]}>Cambio de Contraseña</Text>
                                  </View>
                              <View style={styles.formControl}>
                                  <Text>Nueva Contraseña:</Text>
                                      <TextInput style={ styles.input} onBlur={handleBlur('newPassword')} onChangeText={handleChange('newPassword')} value={ values.newPassword} />
                              </View>
                              <View style={styles.formControl}>
                                  <Text>Confirmar Nueva Contraseña:</Text>
                                  <TextInput style={styles.input} onBlur={handleBlur('confirmNewPassword')} onChangeText={handleChange('confirmNewPassword')} value={ values.confirmNewPassword} />
                              </View>
                              <Pressable onPress={handleSubmit} style={[{paddingVertical:10, paddingHorizontal:5},styles.formControl,{backgroundColor: isValid ? "#00ff40" : "#dddddd"}]}>
                                  <Text style={{textAlign:'center'}}>Cambiar Contraseña</Text>
                                  </Pressable>
                            </View>
                          </>)
                  }
              }
          </Formik>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // flex: 1
        marginHorizontal: 30,
        justifyContent:'center'
    },
    formControl: {
        marginVertical:15
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'#000000',
        marginTop:10
    }
})
export default ChangePasswordScreen