import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from './../hooks/useAuth';

const Settings = ({ navigation }) => {
  const {logOut} = useAuth()
  const handleLogout = () => {
    logOut(null);
    navigation.navigate('Login')
  }
  return (
    <View>
      <Text>Settings Esto es</Text>
      <Button title='Cerrar Sessión' onPress={handleLogout}/>
    </View>
  )
}

export default Settings