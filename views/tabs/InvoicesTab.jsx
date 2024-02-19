import { View, Text, StatusBar, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import AppHeader from '../../components/AppHeader'
const InvoicesTab = () => {
  return (
    <SafeAreaView>
      <View style={Platform.OS != 'ios'? {paddingTop:0}: null }>
        <AppHeader />
        <Text>Invoices</Text>
      </View>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default InvoicesTab