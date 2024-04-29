import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React from 'react'
import ChangePasswordScheme from './../Schemas/ChangePasswordSheme';
import { Formik } from 'formik';
import useAuth from './../Hooks/useAuth';
const ChangePasswordScreen = () => {
    const {changePassword} = useAuth()
  return (
      <SafeAreaView>
          <Formik initialValues={{
              newPassword: '',
              confirmNewPassword:''
          }}
              validationSchema={ChangePasswordScheme}
              onSubmit={(values) => {
                  if (values.newPassword == values.confirmNewPassword) {
                      changePassword(values.newPassword)
                  }
              }}
          >
              {
                  ({values, handleBlur, handleChange, handleSubmit }) => {
                      return (
                          <>
                              <Text>{ JSON.stringify(values)}</Text>
                              <View>
                                  <Text>Nueva Contraseña:</Text>
                                  <TextInput onBlur={handleBlur('newPassword')} onChangeText={handleChange('newPassword')} value={ values.newPassword} />
                              </View>
                              <View>
                                  <Text>Confirmar Nueva Contraseña:</Text>
                                  <TextInput onBlur={handleBlur('confirmNewPassword')} onChangeText={handleChange('confirmNewPassword')} value={ values.confirmNewPassword} />
                              </View>
                              <Pressable onPress={handleSubmit} style={{paddingVertical:5, paddingHorizontal:10}}>
                                  <Text>Cambiar Contraseña</Text>
                              </Pressable>
                          </>)
                  }
              }
          </Formik>
    </SafeAreaView>
  )
}

export default ChangePasswordScreen