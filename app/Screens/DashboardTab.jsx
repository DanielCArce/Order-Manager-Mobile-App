import { View, FlatList, SafeAreaView, Platform, ActivityIndicator, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import useContent from '../Hooks/useContent'
import OrderCard from '../Components/OrderCard'
import AppHeader from '../Components/AppHeader'
import FilterOrders from '../Components/FilterOrders'

const DashboardTab = () => {
  const [orders, setOrders] = useState([])
  const { ContentState, getOrders } = useContent()
  useEffect(function () {
    getOrders()
    let porers = ContentState.orders.filter((order) => {
      if (ContentState.filterBy == 'ON_PROCESS') {
        return order.status == 'ON_PROCESS'
      }
      if (ContentState.filterBy == 'COMPLETED') {
        return order.status == 'COMPLETED'
      }
      return order

    })
    setOrders(porers)
  }, [])
  useEffect(function () { 
    let porers = ContentState.orders.filter((order) => {
      if (ContentState.filterBy == 'ON_PROCESS') {
        return order.status == 'ON_PROCESS'
      }
      if (ContentState.filterBy == 'COMPLETED') {
        return order.status == 'COMPLETED'
      }
      return order

    })
    setOrders(porers)
  },[ContentState.filterBy])
  return (
      <SafeAreaView>
      <View style={[Platform.OS == "web" || Platform.OS == "android" ? { marginTop: 50, marginHorizontal: 30 } : null]}>
        {/* <Text>{ JSON.stringify(ContentState.orders)}</Text> */}
        <FlatList data={orders} renderItem={({ item }) => <OrderCard orderInfo={item} />} keyExtractor={(item) => item.orderID} ListEmptyComponent={<ActivityIndicator/>} refreshing={true} ListHeaderComponent={<>
        <AppHeader/> 
        <Text style={{marginVertical:15, fontWeight:'600', fontSize:26, textAlign:'center'}}>Ordenes Pendientes</Text><FilterOrders/></>}/>
      </View>
    </SafeAreaView>
  )
}

export default DashboardTab