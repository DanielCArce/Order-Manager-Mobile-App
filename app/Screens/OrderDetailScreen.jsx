import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import React, { useRef } from "react";
import useContent from "../Hooks/useContent";
import {
  calculateSubtotalPerLine,
  calculateTotal,
  calculateUnidPrice,
} from "../Utils/math";
import { formatDate, formatNumbers } from "../Utils/dateFormat";
import { useNavigation } from "@react-navigation/native";
import AppHeader from "./../Components/AppHeader";
import { shareButton } from "./../Utils/share";

const OrderDetailScreen = () => {
  const { ContentState } = useContent();
  const navigation = useNavigation();
  const orderRef = useRef();
  const handleShare = () => {
    shareButton(orderRef);
  };

  return (
    <>
      <AppHeader />
      <View style={{ paddingHorizontal: 8, paddingVertical: 25, backgroundColor:'#f3f3f3' }} ref={orderRef} collapsable={false}>
        <View
          style={{
            alignContent: "space-between",
            gap: 10,
            marginTop: 15,
            paddingVertical: 30,
          }}
        >
          <View>
            <Text>Orden No. {ContentState.order.orderID}</Text>
          </View>
          <View>
            <Text>Fecha: {formatDate(ContentState.order.date)}</Text>
          </View>
          <View>
            <Text>Cliente: {ContentState.order.client.name}</Text>
          </View>
          <View
            style={{
              backgroundColor: "cyan",
              width: "45%",
              paddingHorizontal: 5,
              paddingVertical: 5,
              borderRadius: 8,
              marginVertical: 10,
            }}
          >
            <View>
              <Text style={{ textAlign: "center" }}>Precio Por Pulgada</Text>
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>
                {ContentState.order.pricePerInch}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottomWidth: 2,
            }}
          >
            <View>
              <Text>Descripción</Text>
            </View>
            <View>
              <Text>Cantidad</Text>
            </View>
            <View>
              <Text>Precio Unitario</Text>
            </View>
            <View>
              <Text>Subtotal</Text>
            </View>
                  </View>
          <ScrollView>
            {ContentState.order.items.map((itm) => {
              return (
                          <View
                              key={itm.id}
                              style={{
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                              }}
                          >
                              <Text>{`${itm.unid.slice(0, 3)} ${itm.description
                                  } ${itm.type.slice(0, 3)} ${itm.size}\"`}</Text>
                              <View>
                                  <Text>{itm.quantity}</Text>
                              </View>
                              <View>
                                  <Text>
                                      {formatNumbers(calculateUnidPrice(
                                          itm.size,
                                          itm.unid,
                                          ContentState.order.pricePerInch
                                      ))}
                                  </Text>
                              </View>
                              <View>
                                  <Text>
                                      {formatNumbers(calculateSubtotalPerLine(
                                          itm,
                                          ContentState.order.pricePerInch
                                      ))}
                                  </Text>
                              </View>
                          </View>
                      );
            })
            }
                  </ScrollView>
          <View style={{ alignItems: "flex-end", marginTop: 5 }}>
                      {calculateTotal(
                          ContentState.order.items,
                          ContentState.order.pricePerInch,
                          ContentState.order.client.isFE
                      )}
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 15, marginTop: 15 }}>
          <Pressable
            style={{
              backgroundColor: "#008040",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
            onPress={(e) => {
              navigation.navigate("AddShippingScreen", {
                oInfo: ContentState.order,
              });
            }}
          >
            <Text>Agregar Entrega</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#ffff80",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
            onPress={(e) => {
              navigation.navigate("ReviewShippingScreen", {
                oInfo: ContentState.order.orderID,
              });
            }}
          >
            <Text>Revisar Entregas</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#ffff80",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
            onPress={handleShare}
          >
            <Text>Compartir</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default OrderDetailScreen;
