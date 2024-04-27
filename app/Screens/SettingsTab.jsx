import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import AppHeader from '../Components/AppHeader'
import useAuth from '../Hooks/useAuth'

const SettingsTab = () => {
  const {SignOut} = useAuth()
  return (
      <SafeAreaView>
      <AppHeader />
      <Pressable>
        <Text>Agregar Mas Usuarios</Text>
      </Pressable>
      <Pressable>
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