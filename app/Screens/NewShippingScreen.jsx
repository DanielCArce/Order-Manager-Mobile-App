import { View, Text, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import {Formik, FieldArray, Field} from 'formik'
import useContent from '../Hooks/useContent'

const NewShippingScreen = () => {
    const {params} = useRoute()
    const {addShippingToOrder} = useContent()
  return (
    <View style={{marginHorizontal:30, gap:20}}>
          <Text>Entrega Para Orden # {params.oInfo.orderID }</Text>
          {/* <Text>Info: {JSON.stringify(params)}</Text>
          {console.log(params.oInfo)} */}
          <Formik initialValues={params.oInfo} onSubmit={
              (values) => {
                  addShippingToOrder({orderID: values.orderID,shipping:{items:values.items}})
              }
          }>
              {
                  ({values, handleChange, handleSubmit, handleBlur }) => {
                      return (
                          <>
                              <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:2}}>
                                <Text>Descripción</Text>
                                <Text>Cantidad</Text>
                              </View>
                              <FieldArray name='items'>
                              {({ form }) => {
                                  return (
                                      form.values.items.map((item, index) => {
                                          return (
                                              <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom:15, gap:10 }}>
                                                  <View>
                                                      <Text>{`${item.unid.slice(0, 3)} ${item.description} ${item.type.slice(0, 3)} ${item.size}\"`}</Text>
                                                  </View>
                                                  <TextInput onBlur={handleBlur(`items[${index}].quantity`)} onChangeText={handleChange(`items[${index}].quantity`)} value={`${item.quantity}`} style={{borderWidth:1, flex:.35, textAlign:'center'}} />
                                              </View>
                                          )
                                      })
                                  )
                              } }
                          </FieldArray>
                              <Pressable onPress={handleSubmit} style={{backgroundColor:'#3ea3ae'}}>
                                  <Text>Actualizar</Text>
                              </Pressable></>
                      )
                  }
              }
          </Formik>
    </View>
  )
}

export default NewShippingScreen