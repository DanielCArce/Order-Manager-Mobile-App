import { View, Text, Pressable } from 'react-native'
import React, { useReducer } from 'react'
import { useRoute } from '@react-navigation/native'
import { Field, FieldArray, Form, Formik } from 'formik'
import useContent from '../Hooks/useContent'

const NewShippingScreen = () => {
    const {params} = useRoute()
    const {addShippingToOrder} = useContent()
  return (
    <View style={{marginHorizontal:30}}>
          <Text>NewShippingScreen</Text>
          <Text>Info: {JSON.stringify(params)}</Text>
          {console.log(params.oInfo)}
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <Text>Descripción</Text>
              <Text>Cantidad</Text>
          </View>
          <Formik initialValues={params.oInfo} onSubmit={(values) => {
              console.log({ values })
              addShippingToOrder({orderID: values.orderID,shipping:{items:values.items}})
          }}>
              {
                  ({ values, handleSubmit }) => {
                      return (<>
                          <Form>
                              <FieldArray name='items'>
                                  {
                                      ({form }) => {
                                          return (
                                              form.values.items.map((item, index) => {
                                                  return (
                                                      <View key={item.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
                                                          <View>
                                                              <Text>{`${item.unid.slice(0, 3)} ${item.description} ${item.type.slice(0, 3)} ${item.size}\"`}</Text>
                                                          </View>
                                                          <Field style={{flex:0.40}} name={`items[${index}].quantity`} />
                                                      </View>
                                                  )
                                              })
                                          )
                                      }
                                  }
                              </FieldArray>
                              <Pressable onPress={ handleSubmit}>
                                  <Text>Actualizar</Text>
                                  </Pressable>
                          </Form>
                      </>)
                  }
              }
          </Formik>
    </View>
  )
}

export default NewShippingScreen