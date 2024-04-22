import { View, Text, FlatList, SafeAreaView, Platform, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import useContent from '../Hooks/useContent'
import OrderCard from '../Components/OrderCard'
import AppHeader from '../Components/AppHeader'

const DashboardTab = () => {
  const { ContentState, getOrders } = useContent()
  useEffect(function () {
    getOrders()
  },[])
  return (
      <SafeAreaView>
        <View style={[Platform.OS == "web" || Platform.OS == "android" ? { marginTop: 50, marginHorizontal:30 } : null]}>
          <FlatList data={ContentState.orders} renderItem={({ item }) => <OrderCard orderInfo={item}/>} keyExtractor={(item) => item.orderID} ListHeaderComponent={<AppHeader />} ListEmptyComponent={<ActivityIndicator/> }  />
      </View>
    </SafeAreaView>
  )
}

export default DashboardTab