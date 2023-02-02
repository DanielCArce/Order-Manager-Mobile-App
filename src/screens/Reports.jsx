import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { OrderContext } from '../contexts/OrdenContext';
import DataReport from '../components/DataReport';
const Reports = () => {
  const { state } = useContext(OrderContext);

  return (
    <View>
      <Text style={ styles.header}>Información Importante</Text>
      <View  style={styles.container}>
      <DataReport name="Pedidos en Cola" data={20} />
        <DataReport name="I.V.A. Generado" data={203123} />
        <DataReport name="Pedidos en Cola" data={20} />
        <DataReport name="I.V.A. Generado" data={203123} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'stretch',
    flexDirection:'column',
    paddingHorizontal:'12px',
    paddingVertical:'8px'
  },
  header: {
    fontWeight: 'bold',
    fontSize: '24px',
    textAlign:'center'
  }
})

export default Reports