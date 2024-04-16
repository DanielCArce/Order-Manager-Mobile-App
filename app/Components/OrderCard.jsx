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
    navigator.navigate('OrderDetailScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowsInfo}>
        <View>
          <Text style={styles.rowKey}>Order</Text>
        </View>
        <View>
          <Text>{orderInfo.orderID.slice(0,18)}</Text>
        </View>
      </View>
      <View style={styles.rowsInfo}>
        <View>
          <Text style={styles.rowKey}>Cliente:</Text>
        </View>
        <View>
          <Text>{orderInfo.client.name}</Text>
        </View>
      </View>
      <View style={styles.rowsInfo}>
        <View>
          <Text style={styles.rowKey}>Fecha:</Text>
        </View>
        <View>
          <Text>{ formatDate(orderInfo.date)}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={[styles.rowsInfo, {gap:15}]}>
          <View>
            <Text style={styles.rowKey}>Estado</Text>
          </View>
          <View>
            <Text>{orderInfo.status}</Text>
          </View>
        </View>
        <View>
          <Pressable style={{backgroundColor:'#F59B48', paddingVertical:5, paddingHorizontal:5}} onPress={handleDetails} >
            <Text>Ver Detalles</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  rowsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowKey: {
    fontWeight:'500'
  },
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingHorizontal: 8,
    paddingVertical:10,
    borderRadius: 10,
    gap: 10,
    marginTop:15
  }
})
export default OrderCard