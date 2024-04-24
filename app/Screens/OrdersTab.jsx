import { View, Text, StatusBar, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OrdersTab = () => {
  const navigator = useNavigation()
    return (<>
      <View>
        <Pressable onPress={(e)=> navigator.navigate('NewOrderScreen')}>
          <Text>Nueva Orden</Text>
        </Pressable>
        <Pressable>
          <Text>Agregar Entrega</Text>
        </Pressable>
      </View>
      <StatusBar/>
  </>
  )
}

export default OrdersTab