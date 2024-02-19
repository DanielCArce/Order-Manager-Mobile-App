import { View, Text, SafeAreaView,StatusBar, Platform } from 'react-native'
import React from 'react'
import AppHeader from './../../components/AppHeader';
const ReportsTab = () => {
  return (
    <SafeAreaView>
      <View style={Platform.OS != 'ios'? {paddingTop:0}: null }>
        <AppHeader />
        <Text>Reports</Text>
      </View>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default ReportsTab