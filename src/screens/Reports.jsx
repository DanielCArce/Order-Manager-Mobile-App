import { View, Text, FlatList, ScrollView } from 'react-native'
import React, {useContext} from 'react'
import { OrderContext } from '../contexts/OrdenContext';
import OrderCard from '../components/OrderCard'
import DataReport from '../components/DataReport';
const Reports = () => {
  const { state } = useContext(OrderContext);

  return (
    <View>
      <Text>Información Importante</Text>
      <View>
      <DataReport name="Pedidos en Cola" data={20} />
        <DataReport name="I.V.A. Generado" data={203123} />
        </View>
    </View>
  )
}

export default Reports