import { View, Text, StatusBar, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AppHeader from './../Components/AppHeader';

const OrdersTab = () => {
  const navigator = useNavigation()
    return (<>
      <SafeAreaView>
        <AppHeader/>
        <Pressable onPress={(e)=> navigator.navigate('NewOrderScreen')}>
          <Text>Nueva Orden</Text>
        </Pressable>
        <Pressable>
          <Text>Agregar Entrega</Text>
        </Pressable>
      <StatusBar/>
      </SafeAreaView>
  </>
  )
}

export default OrdersTab