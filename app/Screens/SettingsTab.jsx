import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import AppHeader from '../Components/AppHeader'
import useAuth from '../Hooks/useAuth'
import { useNavigation } from '@react-navigation/native'

const SettingsTab = () => {
  const {SignOut} = useAuth()
  const navigation = useNavigation()
  return (
      <SafeAreaView style={{flex:1}}>
      <AppHeader />
      <Pressable onPress={()=> navigation.navigate('AddNewUserScreen')}>
        <Text>Agregar Mas Usuarios</Text>
      </Pressable>
      <Pressable onPress={()=> navigation.navigate('ChangePasswordScreen')}>
        <Text>Cambiar Contraseña</Text>
      </Pressable>
      <Pressable onPress={SignOut}>
        <Text>
          Cerrar Sessión
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default SettingsTab