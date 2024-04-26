import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import useContent from "./../Hooks/useContent";
import AddItemScheme from "../Schemas/AddItemsScheme";

const NewOrderScreen = () => {
  const { ContentState, getClients, addNewOrder } = useContent();
  useEffect(function () {
    getClients();
  }, []);
  return (
    <>
      <ScrollView>
        <Formik
          initialValues={{ clientID: 1, items: [], pricePerInch: 300 }}
          onSubmit={(values) => {
            //   console.log({ values });
            addNewOrder(values);
          }}
        >
          {({
            values: valuesGlobal,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <>
                <View style={{ marginHorizontal: 15 }}>
                  {/* <Text>{JSON.stringify(valuesGlobal) }</Text> */}
                  <View style={{ marginBottom: 15 }}>
                    <Text
                      style={{
                        fontSize: 26,
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                    >
                      Información de Cliente
                    </Text>
                  </View>
                  <View style={{ marginBottom: 5 }}>
                    <View>
                      <Text>Cliente:</Text>
                    </View>
                    <Picker
                      selectedValue={valuesGlobal.clientID}
                      onValueChange={(item) => setFieldValue("clientID", item)}
                    >
                      {ContentState.clients.map((client) => {
                        return (
                          <Picker.Item
                            key={client.id}
                            label={client.name}
                            value={client.id}
                          />
                        );
                      })}
                    </Picker>
                    <View style={{ gap: 10 }}>
                      <Text>Precio Por pulgada</Text>
                      <TextInput
                        onBlur={handleBlur("pricePerInch")}
                        onChangeText={handleChange("pricePerInch")}
                        style={{
                          paddingLeft: 10,
                          borderWidth: 1,
                          borderColor: "#000000",
                          borderRadius: 8,
                        }}
                      />
                    </View>
                  </View>
                  <View>
                    <Formik
                      initialValues={{
                        size: 0,
                        type: "Plano",
                        description: "Negro",
                        unid: "Docena",
                        quantity: 0,
                      }}
                      onSubmit={(vals) => {
                        setFieldValue("items", [
                          ...valuesGlobal.items,
                          {
                            ...vals,
                            size: Number(vals.size),
                            quantity: Number(vals.quantity),
                            id: valuesGlobal.items.length + 1,
                          },
                        ]);
                      }}
                      validationSchema={AddItemScheme}
                    >
                      {({
                        values,
                        handleBlur,
                        setFieldValue: setInsiderFieldValue,
                        handleChange,
                        handleSubmit: handleInsiderSubmit,
                      }) => {
                        return (
                          <>
                            <View style={{ gap: 15 }}>
                              <View style={{ gap: 10 }}>
                                <Text>Tamaño:</Text>
                                <TextInput
                                  onBlur={handleBlur("size")}
                                  onChangeText={handleChange("size")}
                                  style={{
                                    paddingLeft: 10,
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderRadius: 8,
                                  }}
                                />
                              </View>
                              <View style={{ gap: 10 }}>
                                <Text>Cantidad:</Text>
                                <TextInput
                                  onBlur={handleBlur("quantity")}
                                  onChangeText={handleChange("quantity")}
                                  style={{
                                    paddingLeft: 10,
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderRadius: 8,
                                  }}
                                />
                              </View>
                              <View style={{ gap: 10 }}>
                                <Text>Unidad:</Text>
                                <Picker
                                  selectedValue={values.unid}
                                  onValueChange={(item) =>
                                    setInsiderFieldValue("unid", item)
                                  }
                                  style={{
                                    paddingLeft: 10,
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderRadius: 8,
                                  }}
                                >
                                  <Picker.Item
                                    label="Paquete"
                                    value="Paquete"
                                  />
                                  <Picker.Item label="Docena" value="Docena" />
                                  <Picker.Item label="Par" value="Par" />
                                </Picker>
                              </View>
                              <View style={{ gap: 10 }}>
                                <Text>Color:</Text>
                                <TextInput
                                  onBlur={handleBlur("description")}
                                  onChangeText={handleChange("description")}
                                  style={{
                                    paddingLeft: 10,
                                    borderWidth: 1,
                                    borderColor: "#000000",
                                    borderRadius: 8,
                                  }}
                                />
                              </View>
                              <View style={{ gap: 10 }}>
                                <Text>Tipo de Articulo:</Text>
                                <Picker
                                  selectedValue={values.type}
                                  onValueChange={(item) =>
                                    setInsiderFieldValue("type", item)
                                  }
                                >
                                  <Picker.Item label="Plano" value="Plano" />
                                  <Picker.Item
                                    label="Redondo"
                                    value="Redondo"
                                  />
                                </Picker>
                              </View>
                              <View style={{ flexDirection: "row", gap: 5 }}>
                                <Pressable
                                  onPress={handleInsiderSubmit}
                                  style={{
                                    paddingVertical: 5,
                                    paddingHorizontal: 5,
                                    borderRadius: 8,
                                    marginBottom: 5,
                                    backgroundColor: "#ffff80",
                                    width: "45%",
                                  }}
                                >
                                  <Text style={{ textAlign: "center" }}>
                                    Agregar Articulo
                                  </Text>
                                </Pressable>
                                <Pressable
                                            onPress={handleSubmit}
                                            style={{
                                                paddingVertical: 10,
                                                paddingHorizontal: 5,
                                                borderRadius: 8,
                                                marginBottom: 15,
                                                backgroundColor: valuesGlobal.items.length <= 0 ? "#9d9d9d" : "#80ff00",
                                                width: "50%",
                                            }}
                                            disabled={valuesGlobal.items.length <= 0 ? true : false }>
                                  <Text style={{ textAlign: "center" }}>
                                    Confirmar Pedido
                                  </Text>
                                </Pressable>
                              </View>
                            </View>
                          </>
                        );
                      }}
                    </Formik>
                  </View>
                </View>
              </>
            );
          }}
        </Formik>
      </ScrollView>
    </>
  );
};

export default NewOrderScreen;
