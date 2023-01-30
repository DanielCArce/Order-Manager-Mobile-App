import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const Orderds = ({ navigation, order }) => {
  const handleDetails = () => {
      navigation.navigate('OrderDetail',{orderID: order.id})
    }
  return (
    <View style={style.container}>
          <Text style={style.titles}>Cliente:{order.client}</Text>
          <Text style={style.content}>Emisión de Pedido:{order.receivedDate}</Text>
          <Text style={style.content}>Estimación de Entrega: { order.estimatedDate}</Text>
      <Button title='Ver Detalles' onPress={ handleDetails} />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    paddingTop: '14',
    paddingBottom: '14',
    paddingRight: '8',
    paddingLeft: '8',
    flex: '1',
    alignItems: 'stretch',
    alignContent: 'space-between',
    marginBottom:'15'
  },
  titles: {
    fontSize: '28',
    fontWeight:'bold',
    color:'#ffffff'
  },
  content: {
    fontSize: '18',
    color:'#ffffff'
  }
})
export default Orderds