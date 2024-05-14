import { View, Text, StatusBar, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "./../Components/AppHeader";

const OrdersTab = () => {
  const navigator = useNavigation();
  return (
    <>
      <SafeAreaView style={{flex:1}}>
        <AppHeader />
        <View style={{gap:10, justifyContent:'space-between', paddingHorizontal:30}}>
          <Pressable onPress={(e) => navigator.navigate("NewOrderScreen")}>
            <Text>Nueva Orden</Text>
          </Pressable>
          <Pressable>
            <Text>Agregar Entrega</Text>
          </Pressable>
        </View>
        <StatusBar />
      </SafeAreaView>
    </>
  );
};

export default OrdersTab;
