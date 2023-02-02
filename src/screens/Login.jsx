import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm'

const Login = ({navigation}) => {
  return (
    <View style={ styles.loginContainer}>
      <View style={styles.header}>
        <Image source={require('../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.headline}>Ingreso</Text>
      </View>
      <LoginForm navigation={navigation} />
      <View>
        <Text>Dev with :sparkling_heart: by @DanielCArce</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: 14,
    paddingVertical:21
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center'
  },
  logo: {
    width: 78,
    height: 78
  },
  headline: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 26,
    textTransform: 'uppercase',
    justifyContent:'space-between'
  }
})
export default Login