import { View, Text, Pressable, TextInput, Platform, SafeAreaView,StyleSheet, ImageBackgroundComponent } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import { Formik } from 'formik';
import LoginScheme from './../../schemas/Login';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { login } = useAuth()
  const navigation = useNavigation()
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginScheme}
      onSubmit={(values) => {
        console.log({values})
        login(`${values.username}_${values.password}`)
    }}>
      {({ isValid,errors, handleChange, handleBlur, handleSubmit, values }) => {
        return (<>
          <View style={{alignSelf:'center',marginTop:40}}>
              <View>
                <Text style={{fontSize:40, fontWeight:800, textAlign:'center'}}>FINA</Text>
              </View>
              <View>
                <Text>Finances & Accounting</Text>
              </View>
            </View>
          <View style={s.container}>
            <View style={s.formSection}>
              <Text style={s.formHeader}>Login</Text>
            </View>
            <View style={s.formSection}>
              <Text>Username: {errors?.username}</Text>
              <TextInput style={s.formInput} onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username }  placeholder='your@mail.com' autoCapitalize='none' autoComplete='off' autoCorrect={false}/>
            </View>
            <View style={s.formSection}>
              <Text>Password: {errors?.password}</Text>
              <TextInput style={s.formInput} onBlur={handleBlur('password')} onChangeText={handleChange('password')} value={values.password }  placeholder='pepito$2013' autoCapitalize='none' autoComplete='off' autoCorrect={false} secureTextEntry/>
            </View>
            <View style={s.formSection}>
              <Pressable onPress={handleSubmit} disabled={!isValid} style={isValid ? {...s.formButtonContainer,backgroundColor: '#0080c0'}: {...s.formButtonContainer,backgroundColor:'#c0c0c0'}}>
                <Text style={s.formButtonText}>Starting...</Text>
              </Pressable>
              <Pressable onPress={()=>{ navigation.navigate('RequestNewPassword',{params:{email: values.username}})}}>
                <Text>Forget Password?</Text>
              </Pressable>
            </View>
          </View>
        </>)
      }}
    </Formik>
  )
}

const s = StyleSheet.create({
  container: {
    paddingTop: Platform.OS !== 'ios' ? 25 : 0,
    paddingHorizontal:14,
    justifyContent: 'center',
    flexGrow:1
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
      paddingHorizontal:4,
    paddingVertical: 10,
      marginBottom:14
  },
    formButtonText: {
      textAlign: 'center',
      color: '#f4f4f4',
      fontWeight:'500'
    }
  })
export default LoginScreen