import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const OrderCard = ({ orderInfo }) => {
  const navigation = useNavigation()
  return (
    <View style={{paddingHorizontal:8, paddingVertical:8, borderColor:'#000000', borderWidth:1, marginHorizontal:8, marginVertical:10, justifyContent:'space-between', flexDirection:'row'} }>
      <View>
        <Text>Order #{ orderInfo.orderID }</Text>
      <Text>Client: {orderInfo.client}</Text>
      <Text>Date: { Intl.DateTimeFormat('es-cr',{day:'2-digit', dayPeriod:'long', month:'2-digit', year:'2-digit', weekday:'long'}).format(orderInfo.date)}</Text>
      </View>
      <View>
        <Pressable style={{backgroundColor:'#11ee32', paddingHorizontal:4, paddingVertical:8, borderRadius:6, marginBottom:5} } onPress={(event)=>{ navigation.navigate('OrderDetails',{orderID: orderInfo.orderID})}}>
          <Text style={{textAlign:'center'}}>Details</Text>
        </Pressable>
        <Pressable style={[{paddingHorizontal:4, paddingVertical:8, borderRadius:6},orderInfo.status == 'COMPLETED' ? {backgroundColor:'#008040'}: {backgroundColor:'#ff8040'}] }>
          <Text style={{textAlign:'center'}}>{ orderInfo.status}</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default OrderCard