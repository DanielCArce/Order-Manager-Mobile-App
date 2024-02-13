import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'

const SettingsTab = () => {
    const {logout} = useAuth()
  return (
    <View>
          <Text>SettingsTab</Text>
          <Pressable onPress={logout} style={s.buttonLogout}>
              <Text>Salirse de la app</Text>
          </Pressable>
    </View>
  )
}

const s = StyleSheet.create({
  buttonLogout: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor:'#800000'
  }
})
export default SettingsTab