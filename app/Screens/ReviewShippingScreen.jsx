import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import useContent from '../Hooks/useContent'

const RenewShippingScreen = () => {
    const { params } = useRoute()
  const [shippingByOrder, setShippingByOrder] = useState([])
    const {ContentState} = useContent()
    useEffect(function () {
        let preShips = ContentState.shippings.filter((item, index) => {
            return item.orderID == params.oInfo
        })
        console.log({ships: ContentState.shippings, orders: ContentState.orders, params, shippingByOrder})
        setShippingByOrder(preShips)
    },[])
  return (
    <View style={{marginHorizontal:30, paddingTop:15}}>
          {/* <Text>{ JSON.stringify(shippingByOrder) }</Text> */}
      <View>
        {shippingByOrder.length == 0 ? <Text>La Orden # {params.oInfo} no tiene entregas registradas</Text> : null}
        { shippingByOrder.length >= 0 ? <Text>
                    Orden #. {params.oInfo}
        </Text> : null}
        {
          shippingByOrder.length >= 0 && shippingByOrder.map((ship, index) => {
            return (
              
              <View key={ship.shippingID} style={{marginVertical:15, backgroundColor: index % 2 == 0 ? "#c0c0c0" : "#8080ff", paddingVertical:10, paddingHorizontal:8, borderRadius:6}}>
                  <View style={{gap:15}}>
                    <Text>
                      Entrega #{ship.id}: {ship.shippingID.slice(0,8)} 
                    </Text>
                </View>
                {/* {Headers } */}
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15}}>
                  <Text>Descripción</Text>
                  <Text>Cantidad</Text>
                </View>
                {/* { Items} */}
                <View>
                  {ship.items.map((it, ind) => {
                    return (
                      <View key={it.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{ `${it.unid} ${it.description} ${it.type} ${it.size}\"` }</Text>
                        <Text>{it.quantity }</Text>
                      </View>
                    )
                  })}
                </View>
                </View>
              
            )
          })
        }
          </View>
    </View>
  )
}

export default RenewShippingScreen