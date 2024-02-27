import { View, Text, FlatList, ActivityIndicator, Platform } from 'react-native'
import React, { useState } from 'react'
import useOrder from '../../hooks/useOrder'
import ShippingCard from '../../components/ShippingCard'
import AppHeader from '../../components/AppHeader'
const ReviewShippings = () => {
  const [currentShippings, setCurrentShippings] = useState([])
    const {getShipping} = useOrder()
  useState(function () {
      const shippings = getShipping()
      setCurrentShippings(shippings)
      // console.log({currentShippings})
    },[])
  return (
    <View style={Platform.OS != 'ios' ? { paddingTop: 0, paddingHorizontal:10 } : null}>
      {currentShippings.length > 0 ? (<FlatList data={currentShippings} renderItem={({ item }) => <ShippingCard key={item.id} shippingInfo={item} />} keyExtractor={ (item ) => item.id } refreshing={true} ListEmptyComponent={<ActivityIndicator />} ListHeaderComponent={<AppHeader screen='OrderDetails'/>} />): <View><AppHeader screen='OrderDetails'/><Text>Oups is empty</Text></View>}
    </View>
  )
}

export default ReviewShippings