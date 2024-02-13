import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const DashboardTab = () => {
  const route = useRoute()
  return (
    <SafeAreaView>
      <View style={Platform.OS != 'ios'? {paddingTop:0}: null }>
      <Text>DashboardTab { route.params.userToken }</Text>
      </View>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default DashboardTab