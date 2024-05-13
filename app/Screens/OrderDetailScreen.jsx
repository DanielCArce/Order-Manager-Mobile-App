import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useRef } from 'react'
import useContent from '../Hooks/useContent'
import { formatDate } from './../Utils/dateFormat';
import { shareAsync, isAvailableAsync } from 'expo-sharing'
import {captureRef} from 'react-native-view-shot'
import { useNavigation } from '@react-navigation/native';

const OrderDetailScreen = () => {
    const { ContentState } = useContent()
    const navigation = useNavigation()
    const OIRef = useRef()
    const handleShareButton = () => {
        captureRef(OIRef).then((uri) => {
            shareAsync(uri)
        }).catch((error) => {
            console.log({er:error})
        })
    }
    const calculateUnitPrice = (item, pricePerInch) =>{
        if (item.unid == "Paquete") {
        return item.size * pricePerInch / 2
        }
        if (item.unid == "Docena") {
            return item.size * pricePerInch / 144 * 12
        }
        if (item.unid == "Par") {
            return item.size * pricePerInch / 144
        }
        return item.size * pricePerInch
    }
    const calculateSubTotal = (item, pricePerInch) => {
        const unitCost = calculateUnitPrice(item, pricePerInch)
        return unitCost * item.quantity
    }
    const calculateTotal = () => {
        const subtotal = ContentState.order.items.reduce((vp, cv) => {
      return (vp + calculateSubTotal(cv, ContentState.order.pricePerInch))
        }, 0);
        if (ContentState.order.client.isFE) {
            return (<>
                <View style={{flexDirection:'row',justifyContent:'space-between', gap:10}}>
                    <View>
                        <Text>Subtotal</Text>
                    </View>
                    <View>
                        <Text>{Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(subtotal) }</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>I.V.A. 13%</Text>
                    </View>
                    <View>
                        <Text>{Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(subtotal* 0.13)} </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>Total</Text>
                    </View>
                    <View>
                        <Text>{Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(subtotal* 1.13)} </Text>
                    </View>
                </View>
            </>
            )
        }
        return (<>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>Subtotal</Text>
                    </View>
                    <View>
                        <Text>{Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(subtotal) }</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>I.V.A. 13%</Text>
                    </View>
                    <View>
                        <Text>{Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(subtotal* 0.0)} </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>Total</Text>
                    </View>
                    <View>
                        <Text>{Intl.NumberFormat('es-cr',{style:'currency', currency:'CRC'}).format(subtotal* 1)} </Text>
                    </View>
                </View>
        </>
            )
    }
  return (
    <View style={{paddingHorizontal:8, paddingTop:25}}>
          {/* <Text>OrderDetailScreen {JSON.stringify(ContentState)}</Text> */}
          <View style={{alignContent:'space-between', gap:10}}>
              <View>
                  <Text>Orden No. {ContentState.order.orderID }</Text>
              </View>
              <View>
                  <Text>Fecha: {formatDate(ContentState.order.date) }</Text>
              </View>
              <View>
                  <Text>Cliente: {ContentState.order.client.name}</Text>
              </View>
              <View style={{backgroundColor:'cyan', width:"45%", paddingHorizontal:5, paddingVertical:5, borderRadius:8, marginVertical:10}}>
                  <View>
                    <Text style={{textAlign:'center'}}>Precio Por Pulgada</Text>
                  </View>
                  <View>
                      <Text style={{textAlign:'center'}}>{ ContentState.order.pricePerInch }</Text>
                  </View>
              </View>
          </View>
          <View ref={OIRef}>
          <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:2}}>
              <View>
                  <Text>Descripción</Text>
              </View>
              <View>
                  <Text>Cantidad</Text>
              </View>
              <View>
                  <Text>Precio Unitario</Text>
              </View>
              <View>
                  <Text>Subtotal</Text>
              </View>
          </View>
          <ScrollView contentContainerStyle={{paddingHorizontal:5}}>
              {ContentState.order.items.map((item) => {
                  return (<View key={item.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text>{`${item.unid.slice(0,3)} ${item.description} ${item.type.slice(0,3)} ${item.size}\"`}</Text>
              <View>
                  <Text>{item.quantity}</Text>
              </View>
              <View>
                  <Text>{Intl.NumberFormat('es-cr',{currency:'CRC', style:'currency'}).format(calculateUnitPrice(item, ContentState.order.pricePerInch))}</Text>
              </View>
              <View>
                  <Text>{Intl.NumberFormat('es-cr',{currency:'CRC', style:'currency'}).format(calculateSubTotal(item, ContentState.order.pricePerInch))}</Text>
              </View>
          </View> )
              })}
              </ScrollView>
              
          <View style={{alignSelf:'flex-end', marginTop:5}}>
              {calculateTotal()}
              </View>
        </View>
          <View style={{flexDirection:'row', gap:15}}>

          <Pressable style={{backgroundColor: '#008040', paddingHorizontal: 5, paddingVertical:5}} onPress={(e) => {
              navigation.navigate('AddShippingScreen', {
                  oInfo: ContentState.order
                })
            }}>
              <Text>Agregar Entrega</Text>
          </Pressable>
              <Pressable style={{backgroundColor:'#ffff80', paddingHorizontal: 5, paddingVertical:5}} onPress={(e) => {
              navigation.navigate('ReviewShippingScreen', {
                  oInfo: ContentState.order.orderID
                })
            }}>
              <Text>Revisar Entregas</Text>
              </Pressable>
              <Pressable style={{ backgroundColor: '#ffff80', paddingHorizontal: 5, paddingVertical: 5 }} onPress={handleShareButton}>
              <Text>Compartir</Text>
          </Pressable>
              </View>
    </View>
  )
}

export default OrderDetailScreen