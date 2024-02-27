import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ShippingCard = ({ shippingInfo }) => {
    console.log({shippingInfo})
  return (
    <View style={{marginTop:15}}>
          <Text>Shipping order: {shippingInfo.orderID} Shipping ID: { shippingInfo.id }</Text>
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
              {
                  shippingInfo.items?.length > 0 && shippingInfo.items.map((item) => {
                      return (
                          <>
                              <View>
                                  <Text>{ item.quantity}</Text>
                              </View>
                          </>
                      )
                  })
              }
      </ScrollView>
    </View>)
}

export default ShippingCard