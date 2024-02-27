import { View, Text, SafeAreaView, Platform, StatusBar, FlatList, ActivityIndicator, Pressable } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import AppHeader from '../../components/AppHeader'
import OrderCard from '../../components/OrderCard';
import useOrder from '../../hooks/useOrder';
const DashboardTab = () => {
  const [orders, setOrders] = useState([])
  const {getOrders} = useOrder()
  useLayoutEffect(function () {
    // console.log({o: getOrders()})
    setOrders(getOrders())
  },[])
  return (
    <SafeAreaView>
      <View style={Platform.OS != 'ios' ? { paddingTop: 0 } : null}>
        <FlatList data={orders} renderItem={({ item }) => <OrderCard orderInfo={item} />} ListHeaderComponent={<AppHeader />} ListEmptyComponent={<ActivityIndicator />} keyExtractor={(item) => item.orderID} refreshing={true} />
      </View> 
      <StatusBar/>
    </SafeAreaView>
  )
}

export default DashboardTab