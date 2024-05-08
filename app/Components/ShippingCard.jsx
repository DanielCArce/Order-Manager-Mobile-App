import { View, Text } from 'react-native'
import React from 'react'

const ShippingCard = ({ data }) => {
  return (
      <View key={data.shippingID} style={{marginHorizontal:30, paddingHorizontal:10, paddingVertical:10, borderRadius:6, backgroundColor: data.id % 2 == 0 ? "lightblue": "lightgray", marginBottom:15}}>
          <Text>Entrega # {data.shippingID}</Text>
          <Text>Orden # {data.orderID}</Text>
          {/* <Text>{ JSON.stringify(data)}</Text> */}
          <View>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:15}}>
                  <Text>Descripción</Text>
                  <Text>Cantidad</Text>
              </View>
              {data.items.map((it) => {
                  return (
                      <View key={it.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
                          <Text>{`${it.unid} ${it.description} ${it.type} ${it.size}\"`}</Text>
                          <Text>{it.quantity}</Text>
                          <Text>{ (it.size *350  /2) * it.quantity }</Text>
                        </View>
                  )
              })}
          </View>
    </View>
  )
}

export default ShippingCard