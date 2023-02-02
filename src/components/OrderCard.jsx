import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Orderds = ({ navigation, order }) => {
  const handleDetails = () => {
      navigation.navigate('OrderDetail',{orderID: order.id})
    }
  return (
    <View style={style.container}>
      <View style={style.section}>
        <View>
          <Text style={style.title}>Nombre de Cliente:</Text>
        </View>
        <View>
          <Text style={style.titleText}>{order.client}</Text>
        </View>
      </View>
      <View style={style.section}>
        <View>
          <Text style={style.title}>Orden Recivida en:</Text>
        </View>
        <View>
          <Text style={style.titleText}>{order.receivedDate}</Text>
        </View>
      </View>
      <View style={style.section}>
        <View>
          <Text style={style.title}>Entrega Estimada:</Text>
        </View>
        <View>
          <Text style={style.titleText}>{order.estimatedDate}</Text>
        </View>
      </View>
      <TouchableOpacity style={style.button} onPress={handleDetails}>
          <Text style={style.buttonText}>Más detalles del pedido</Text>
      </TouchableOpacity>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3de',
    paddingHorizontal:8,
    paddingVertical: 12,
    marginBottom:12
  },
  title: {
    fontWeight: 'bold',
  },
  titleText:{fontVariant:'italic'},
  section: {
    justifyContent: 'space-between',
    flexDirection:'row',
    marginBottom:12
  },
  button: {
    backgroundColor: '#0348bc',
    paddingHorizontal:8,
    paddingVertical:8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight:700
  }
})
export default Orderds