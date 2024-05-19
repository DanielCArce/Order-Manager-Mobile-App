import { View, Text, StyleSheet, Platform, SafeAreaView  } from 'react-native'
import React from 'react'
import AppHeader from '../Components/AppHeader'
import SignInForm from '../Components/SignInForm'
const LoginScreen = () => {
  return (
    <SafeAreaView style={s.safeContainer}>
        <View style={s.container}>
          <AppHeader moveToScreen='LoginScreen'/>
          <View style={s.contentContainer}>
            <Text style={s.textHeader}>Iniciar Sessión</Text>
          <SignInForm/>
          </View>
        </View>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  safeContainer: {
    flex:1
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: Platform.OS == "android" ? 25 : 0
  },
  contentContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  textHeader: {
    fontSize: 34,
    textAlign:'center'
  }
})
export default LoginScreen