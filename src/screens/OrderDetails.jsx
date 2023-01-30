import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { OrderContext } from './../contexts/OrdenContext'
import TableDetails from '../components/TableDetails'

const OrderDetails = ({ navigation, route }) => {
  const { state } = useContext(OrderContext);
  const { orders } = state;
  const { orderID } = route.params;
  const orderToDetails = Object.assign({}, orders.filter((val) => { return val.id === orderID })[0]);
  const orderTotal = orderToDetails.products.reduce((acc, val) => acc += (val.quantity* val.price),0)
  return (
    <View style={styles.container}>
      <View style={ styles.table}>
        <Text style={ styles.tableHeader}>Order No. </Text>
        <Text>{orderToDetails.id}</Text>
      </View>
      <View style={ styles.table}>
        <Text style={ styles.tableHeader}>Cliente </Text>
        <Text>{orderToDetails.client}</Text>
      </View>
      <View>
        <Text style={ styles.tableHeader}>Productos:</Text>
        <TableDetails data={ orderToDetails.products } />        
      </View>
      <View style={ styles.table}>
        <Text style={ styles.tableHeader}>Total Pedido </Text>
        <Text>{Intl.NumberFormat('es').format(orderTotal)}</Text>
      </View>
      <View style={ styles.table}>
        <Text style={ styles.tableHeader}>I.V.A. </Text>
        <Text>{ orderToDetails.isFE ? Intl.NumberFormat('es').format(orderTotal*0.13) : 0}</Text>
      </View>
      <View style={ styles.table}>
        <Text style={ styles.tableHeader}>Total Factura </Text>
        <Text>{ orderToDetails.isFE ? Intl.NumberFormat('es').format(orderTotal +(orderTotal*0.13)) : 0}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: '12px',
    // backgroundColor: '#323232',
    // borderColor: 'black',
    // borderRadius: '4',
    // borderWidth: '3',
    // margin:'8'
  },
  tableHeader: {
        fontWeight: '800',
        color: 'black',
        textAlign:'center'
    },
  table: {
    flexDirection:'row'
  }
})
export default OrderDetails