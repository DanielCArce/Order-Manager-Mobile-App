import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import useContent from "../Hooks/useContent";
import ShippingCard from '../Components/ShippingCard'
const RenewShippingScreen = () => {
  const { params } = useRoute();
  const [shippingByOrder, setShippingByOrder] = useState([])
  const { ContentState } = useContent();
  useEffect(function () {
    let preShips = ContentState.shippings.filter((item, index) => {
      return item.orderID == params.oInfo;
    });
    setShippingByOrder(preShips);
  }, []);
  return (
    <FlatList data={shippingByOrder} keyExtractor={(item) => item.shippingID} renderItem={({ item }) => <ShippingCard data={item}/>} style={{marginTop:25}} />
  )
};

export default RenewShippingScreen;
