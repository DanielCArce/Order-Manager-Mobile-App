import { View, Text, TextInput, Pressable, StyleSheet, Alert, Platform } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';
import RequestNewPasswordScheme  from '../../schemas/RequestNewPassword'
import AppHeader from '../../components/AppHeader'
const RequestNewPassword = () => {
  const navigation = useNavigation()
  const router = useRoute()
  console.log({params: router.params})
  return (
    <Formik initialValues={{ email: router.params.email }} validationSchema={RequestNewPasswordScheme} onSubmit={(values) => {
      console.log({ values })
      Alert.alert('Request Sended', 'If email exist a email will send to recovery', [{
        text: 'Thanks',
        onPress:()=> console.log('thanks')
      }])
      
    }}>
      {({values, handleBlur, handleChange,handleSubmit, errors, isValid }) => {
        return (
          <>
            <AppHeader />
            <View style={s.container}>
              <View style={[s.formSection]}>
                <Text style={s.formHeader}>Forget Password</Text>
              </View>
              <View>
              <View style={s.formSection}>
                <Text>Email: {errors?.email}</Text>
                <TextInput style={s.formInput} onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} autoCapitalize='none' autoComplete='off' autoCorrect={false} placeholder='Please write your email'/>
              </View>
              <View style={[s.formSection, {flexDirection:'row', gap:6}]}>
                <Pressable onPress={handleSubmit} style={s.formButtonContainer}>
                  <Text style={s.formButtonText}>Request Password</Text>
                </Pressable>
                <Pressable onPress={(event) => { console.log({ event });  navigation.goBack()}} style={[s.formButtonContainer,s.backButtonContainer]}>
                  <Text style={s.formButtonText}>LogIn</Text>
                </Pressable>
              </View></View>
            </View>
          </>
        )
      }}
    </Formik>
  )
}
const s = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== 'ios' ? 25 : 0,
    paddingHorizontal:14,
    justifyContent: 'center',
    flexGrow: 1,
    justifyContent:'space-evenly'
  },
  formHeader: {
    textAlign: 'center',
    fontSize: 38,
    fontWeight:'800'
  },
  formSection: {
   marginVertical:8
  },
  formInput: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#000000',
    paddingLeft: 8,
    paddingVertical: 10,
    borderRadius:4
  },
  formButtonContainer: {
    flex:1,
    paddingHorizontal:4,
    paddingVertical: 10,
    marginBottom: 14,
    backgroundColor:'#004080'
  },
    formButtonText: {
      textAlign: 'center',
      color: '#f4f4f4',
      fontWeight:'500'
  },
    backButtonContainer:{
      backgroundColor: '#f42e0b'
    }
})

export default RequestNewPassword