import { View, Text, FlatList, Pressable} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import useContent from "../Hooks/useContent";
import ShippingCard from "../Components/ShippingCard";
import AppHeader from './../Components/AppHeader';
const RenewShippingScreen = () => {
  const { params } = useRoute();
  const [shippingByOrder, setShippingByOrder] = useState([]);
  const { ContentState, updateToCompletedOrder } = useContent();
  useEffect(function () {
    let preShips = ContentState.shippings?.filter((item, index) => {
      return item.orderID == params.oInfo;
    });
    setShippingByOrder(preShips);
  }, []);
  
  return (
    <>
      <FlatList ListHeaderComponent={<>
        <AppHeader />
        <Pressable onPress={() => {
          updateToCompletedOrder(params.oInfo)
        }}>
          <Text>Completar</Text>
        </Pressable>
        </>}
        data={shippingByOrder}
        keyExtractor={(item) => item.shippingID}
        renderItem={({ item }) => <ShippingCard data={item} />}
        style={{ marginTop: 25 }}
        />
        {shippingByOrder.length == 0 && <View style={{position:'absolute', top:150, right:50, left:50}}><Text>Sin Entregas Para la orden No. {params.oInfo }</Text></View>}
    </>
  );
};

export default RenewShippingScreen;
