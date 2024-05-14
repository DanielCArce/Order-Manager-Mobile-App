import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { formatDate, formatNumbers } from './../Utils/dateFormat';
import useContent from '../Hooks/useContent';
import { captureRef } from 'react-native-view-shot';
import { shareAsync } from 'expo-sharing';
import { calculateSubtotalPerLine, calculateTotal } from '../Utils/math';
import { shareButton } from '../Utils/share';

const ShippingCard = ({ data }) => {
    const shippRef = useRef()
    const handleShare = () => {
        shareButton(shippRef)
    }
    const { ContentState } = useContent()
    const [clientData, setClientInfo] = useState([])
    useEffect(function () { 
        let clientInfo = ContentState.orders.filter((v, ind) => {
            if (v.orderID == data.orderID) {
                return {c: v.isFE}
            }
        })
        setClientInfo(clientInfo)
    },[])
    return (
      <View ref={shippRef} key={data.shippingID} style={{marginHorizontal:30, paddingHorizontal:10, paddingVertical:10, borderRadius:6, backgroundColor: data.id % 2 == 0 ? "lightblue": "lightgray", marginBottom:15}}>
          <Text>Entrega # {data.shippingID}</Text>
          <Text>Orden # {data.orderID}</Text>
          {/* <Text>{JSON.stringify(data)}</Text> */}
            {/* <Text>{JSON.stringify(clientData)}</Text> */}
            <Text style={{fontWeight:'800'}}>Cliente: {clientData[0]?.client.name }</Text>
          <Text>Fecha: {formatDate(data.date)}</Text>
          <View>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:15}}>
                  <Text>Descripción</Text>
                    <Text>Cantidad</Text>
                    <Text>Subtotal</Text>
              </View>
              {data.items.map((it) => {
                  return (
                      <View key={it.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
                          <Text>{`${it.unid} ${it.description} ${it.type} ${it.size}\"`}</Text>
                          <Text>{it.quantity}</Text>
                          <Text>{ formatNumbers(calculateSubtotalPerLine(it, data.pricePerInch)) }</Text>
                        </View>
                  )
              })}
                <View style={{ alignItems: 'center', marginTop: 10, flexDirection:'row', justifyContent:'space-between' }}>
                    <Pressable onPress={handleShare} >
                        <Text>Compartir Entrega</Text>
                    </Pressable>
                    <View style={{alignItems:'flex-end'}}>
                    {calculateTotal(data.items,data.pricePerInch, clientData[0]?.client.isFE)}
                    </View>
              </View>
          </View>
    </View>
  )
}

export default ShippingCard