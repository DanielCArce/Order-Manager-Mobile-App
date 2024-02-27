import { View, Text, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import useOrder from '../../hooks/useOrder';
const OrderDetails = () => {
  const [currentOrder, setCurrentOrder] = useState([])
  const navigation = useNavigation()
  const {getOrder, addCurrentShipping} = useOrder()
  useEffect(function () {
    let ob = Object.fromEntries( getOrder())
      // console.log({cOrder: ob })
    setCurrentOrder(getOrder()[0])
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
      <View>
        <Pressable onPress={() => { navigation.goBack() }}>
        <Text> ⏪ Back To Dashboard</Text></Pressable>
      </View>
      <View style={{flexDirection:'row', marginBottom:14, gap:10, alignItems:'center'}}>
        <View>
          <View style={{gap:10, flexDirection:'row'}}>
            <Text>Client:</Text>
            <Text style={{fontWeight:'800'}}>{currentOrder.client}</Text>
          </View>
          <View style={{gap:10, flexDirection:'row'}}>
            <Text>Date:</Text>
            <Text style={{fontWeight:'800'}}>{Intl.DateTimeFormat('es-cr', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(currentOrder.date)}</Text>
          </View>
        </View>
        <View style={{backgroundColor:'#000080', paddingVertical:12, paddingHorizontal:10}}>
          <Text style={{color:'#ffffff',fontWeight:'600', textTransform:'capitalize'}}>Order No. {currentOrder.orderID }</Text>
        </View>
      </View>
      <View style={ {flexDirection:'row', alignContent:'space-between',paddingVertical:10, gap:10, borderColor:'#000000', borderBottomWidth:1}}>
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
      <ScrollView>
      <View>
        {
          currentOrder.items?.length > 0 && currentOrder.items.map((item) => {
            return (
              <View key={item.id} style={[{flexDirection:'row', alignContent:'space-between', gap:10, marginVertical:4, paddingHorizontal:4, paddingVertical:5},item.id % 2 && {backgroundColor:'#c0c0c0'}]}>
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
      </ScrollView>
      <View style={{ alignItems: 'flex-end' }}>
          {currentOrder.items?.length > 0 && estimateTotal()}
      </View>
      <View style={{flexDirection:'row', gap: 10, justifyContent:'space-between', marginVertical:14}}>
      <Pressable onPress={(event)=> {throw new Error('Function isnt impreemnted')}}>
        <Text>Add Shipping</Text>
      </Pressable>
        <Pressable onPress={() => {
          addCurrentShipping(currentOrder.orderID)
          navigation.navigate('ReviewShippingOrders')
        }}>
        <Text>View Shipping</Text>
        </Pressable>
        </View>
    </View>
  )
}

export default OrderDetails