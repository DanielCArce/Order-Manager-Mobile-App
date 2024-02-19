import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native';
import useOrder from '../../hooks/useOrder';
import TableDetails from '../../components/TableDetails'
const OrderDetails = () => {
  const [currentOrder, setCurrentOrder] = useState([])
  const navigation = useNavigation()
  const router = useRoute()
  const {state} = useOrder()
  useEffect(function () {
    const co = state.orders.filter((val) => val.orderID == router.params.orderID)
    setCurrentOrder(co[0])
  }, [])
  const estimateTotal = () => {
    const totalWithoutTax = currentOrder.items.reduce((vp, cv) => {
      return (vp + cv.size * currentOrder.pricePerInch / 2 * cv.quantity)
    }, 0);
    if (currentOrder.isFE) {
      return (<>
        <Text>Subtotal: { Intl.NumberFormat('es-cr',{currency:'CRC'}).format(totalWithoutTax)  }</Text>
        <Text>I.V.A.: {Intl.NumberFormat('es-cr',{currency:'CRC'}).format(totalWithoutTax * 0.13)}</Text>
        <Text>Total: { Intl.NumberFormat('es-cr',{currency:'CRC'}).format(totalWithoutTax * 1.13)}</Text>
      </>)
    }
    return (<>
          <Text>Subtotal: { Intl.NumberFormat('es-cr',{currency:'CRC'}).format(totalWithoutTax)  }</Text>
        <Text>Total: { Intl.NumberFormat('es-cr',{currency:'CRC'}).format(totalWithoutTax * 1)}</Text>
    </>)
  }
  const estimateLine = (item) => {
    return Intl.NumberFormat().format(item.size * currentOrder.pricePerInch /2 * item.quantity)
  }
  const estimateCost = (item) => {
    if (item.und == 'Paquete') {
      return Intl.NumberFormat().format(item.size * currentOrder.pricePerInch /2)
    }
    return Intl.NumberFormat().format(item.size * currentOrder.pricePerInch)
  }
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
      <View style={{flexDirection:'row', marginBottom:14, gap:10, alignItems:'center'}}>
        <View>
          <View>
            <Text>Client: {currentOrder.client}</Text>
          </View>
          <View>
            <Text>Date: {Intl.DateTimeFormat('es-cr', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(currentOrder.date)}</Text>
          </View>
        </View>
        <View style={{backgroundColor:'#000080', paddingVertical:12, paddingHorizontal:10}}>
          <Text style={{color:'#ffffff',fontWeight:'600', textTransform:'capitalize'}}>Order No. {currentOrder.orderID }</Text>
        </View>
      </View>
      <View style={ {flexDirection:'row', alignContent:'space-between', gap:10}}>
        <View style={{flexGrow:3}}>
          <Text style={{textAlign:'center'}}>Description</Text>
        </View>
        <View style={{flexGrow:2}}>
          <Text style={{textAlign:'center'}}>Qty</Text>
        </View>
        <View style={{flexGrow:2}}>
          <Text style={{textAlign:'center'}}>Unit Price</Text>
        </View>
        <View style={{flexGrow:2}}>
          <Text style={{textAlign:'center'}}>Subtotal</Text>
        </View>
      </View>
      <View>
        {
          currentOrder.items?.length > 0 && currentOrder.items.map((item) => {
            return (
              <View key={item.id} style={{flexDirection:'row', alignContent:'space-between', gap:10, borderColor:'#000000', borderWidth:1, marginVertical:4, paddingHorizontal:4}}>
                <View style={{flexGrow:3}}>
                  <Text>{item.description} { item.size}"</Text>
                </View>
                <View style={{flexGrow:2}}>
                  <Text style={{textAlign:'center'}}>{item.quantity}</Text>
                </View>
                <View style={{flexGrow: 2}}>
                  <Text style={{textAlign:'center'}}>{estimateCost(item)}</Text>
                </View>
                <View style={{flexGrow:2}}>
                  <Text style={{textAlign:'center'}}>{estimateLine(item)}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
      <View style={{alignItems:'flex-end'}}>{ currentOrder.items?.length > 0 && estimateTotal() }</View>
      <View>
        <Pressable onPress={() => { navigation.goBack() }}>
        <Text> ⏪ Back To Dashboard</Text></Pressable>
      </View>
    </View>
  )
}

export default OrderDetails