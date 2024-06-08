import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import useContent from '../Hooks/useContent'
import { useNavigation } from '@react-navigation/native'
import { formatDate } from '../Utils/dateFormat'

const OrderCard = ({ orderInfo }) => {
  const { setCurrentOrder } = useContent()
  const navigator = useNavigation()
  const handleDetails = (e) => {
    setCurrentOrder(orderInfo.orderID)
    return navigator.navigate('OrderDetailScreen')
  }
  const handleStatus = (status) => {
    if (status == "ON_PROCESS") {
      return "Esperando"
    }
    if (status == "COMPLETED") {
      return "Listo"
    }
  }
  return (
    <View style={[styles.container]}>
      <View>
        <Text style={{textAlign:'center', fontWeight:'700'}}>{orderInfo.orderID}</Text>
      </View>
      <View style={styles.rowsInfo}>
        <View style={{gap:15, justifyContent:'space-between'}}>
          <Text style={styles.rowKey}>{ orderInfo.client.name}</Text>
          <Text>Fecha: {formatDate(orderInfo.date)}</Text>
          <Text>{orderInfo.items.length } articulos</Text>
        </View>
        <View style={{gap:10}}>
          <Text style={{textTransform:'uppercase', fontWeight:'700'}}>{handleStatus(orderInfo.status) }</Text>
          <Pressable onPress={handleDetails} style={styles.button}>
            <Text style={{color:'#ffffff'}}>Mas Detalles</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  rowsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rowKey: {
    fontWeight:'500',
    fontSize:22
  },
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical:10,
    borderRadius: 10,
    gap: 10,
    marginTop: 15
  },
  button: {
    paddingVertical:6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor:'#0080c0',
    borderRadius:6
  }
})
export default OrderCard