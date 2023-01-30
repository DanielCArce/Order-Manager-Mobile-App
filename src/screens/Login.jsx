import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({navigation}) => {
  return (
    <View style={ styles.loginContainer}>
      <Text style={ styles.headline}>Login</Text>
      <LoginForm navigation={ navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  loginContainer: {
    padding:'18px'
  },
  headline: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontSize:'32'
    
  }
})
export default Login