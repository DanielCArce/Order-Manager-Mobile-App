import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, { useContext, useEffect } from 'react'
import OrderCard from '../components/OrderCard'
import { OrderContext } from './../contexts/OrdenContext';
import ordersmock from '../../orders.mock.json'
const Dashboard = ({ navigation }) => {
  const { state, dispatch, ACTIONS } = useContext(OrderContext);
  useEffect(() => {
    dispatch({ type: ACTIONS.SET_ORDERS, payload: ordersmock})
  }, []);
  const renderItem = ({ item }) => <OrderCard navigation={navigation} key={item.id} order={{...item}}/>
  return (
    <View style={styles.container}>
      <Text style={styles.header }>Orders</Text>
      <FlatList data={state.orders} renderItem={renderItem} collapsable="true"/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: '14px',
    justifyContent: 'space-between',
    gap:'8px'
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize:'26px'
  }
})

export default Dashboard