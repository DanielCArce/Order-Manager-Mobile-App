import { View, FlatList, SafeAreaView, Platform, ActivityIndicator, Text } from 'react-native'
import React, { useEffect } from 'react'
import useContent from '../Hooks/useContent'
import OrderCard from '../Components/OrderCard'
import AppHeader from '../Components/AppHeader'

const DashboardTab = () => {
  const { ContentState, getOrders, getShippings } = useContent()
  useEffect(function () {
    getOrders()
  }, [])
  useEffect(function () {
    getShippings()
  },[])
  return (
      <SafeAreaView>
      <View style={[Platform.OS == "web" || Platform.OS == "android" ? { marginTop: 50, marginHorizontal: 30 } : null]}>
        {/* <Text>{ JSON.stringify(ContentState.orders)}</Text> */}
        <FlatList data={ContentState.orders} renderItem={({ item }) => <OrderCard orderInfo={item} />} keyExtractor={(item) => item.orderID} ListEmptyComponent={<ActivityIndicator/>} refreshing={true} ListHeaderComponent={<>
        <AppHeader/> 
        <Text style={{marginVertical:15, fontWeight:'600', fontSize:26, textAlign:'center'}}>Ordenes Pendientes</Text></>}/>
      </View>
    </SafeAreaView>
  )
}

export default DashboardTab