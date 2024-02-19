import { View, Text, Pressable, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import useAuth from '../../hooks/useAuth'
import AppHeader from '../../components/AppHeader'
const SettingsTab = () => {
    const {logout} = useAuth()
  return (
    <SafeAreaView>
      <View style={Platform.OS != 'ios'? {paddingTop:0}: null }>
        <AppHeader />
        <Text>Clients and Providers</Text>
        <Pressable onPress={logout} style={s.buttonLogout}>
          <Text>Sign out</Text>
        </Pressable>
      </View>
      <StatusBar/>
    </SafeAreaView>
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