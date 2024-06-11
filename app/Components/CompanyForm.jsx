import {
  View,
  Text,
  Switch,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Formik } from "formik";
import addNewClientScheme from "../Schemas/AddNewCLientScheme";
import useContent from './../Hooks/useContent';
function CompanyForm() {
  const {addNewClient} = useContent()
  return (
    <Formik
      initialValues={{ name: "", email: "", type: "FACTORY", isFE: true }}
      onSubmit={(values) => addNewClient({name:values.name, type:values.type, email: values.email, isFE: values.isFE})}
      validationSchema={addNewClientScheme}
    >
      {({
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        isValid,
        errors,
        touched,
      }) => {
        return (
          <View style={s.container}>
            <View>
              <Text
                style={{ textAlign: "center", fontSize: 26, fontWeight: "700" }}
              >
                Nuevo Cliente
              </Text>
            </View>
            <View style={s.formControl}>
              <Text style={s.label}>Nombre de Empresa</Text>
              {touched.name && errors.name ? (
                <Text style={s.errorsLabel}>{errors.name} </Text>
              ) : null}
              <TextInput
                style={s.input}
                onBlur={handleBlur("name")}
                onChangeText={handleChange("name")}
                value={values.name}
              />
            </View>
            <View style={s.formControl}>
              <Text style={s.label}>Correo Electrónico</Text>
              {touched.email && errors.email ? (
                <Text style={s.errorsLabel}>{errors.email} </Text>
              ) : null}
              <TextInput
                style={s.input}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                value={values.email}
              />
            </View>
            <View style={s.formControl}>
              <Text style={s.label}>Factura Electrónica</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text>No</Text>
                <Switch
                  onValueChange={(feVal) => setFieldValue("isFE", feVal)}
                  value={values.isFE}
                  trackColor={{ false: "red", true: "blue" }}
                  thumbColor={values.isFE ? "orange" : "gray"}
                />
                <Text>Si</Text>
              </View>
            </View>
            <View style={s.formControl}>
              <Text style={s.label}>Tipo Cliente</Text>
              <Picker onValueChange={handleChange("type")}>
                <Picker.Item label="Fabricante" value="FACTORY" />
                <Picker.Item label="Peletero" value="DISTRIBUTOR" />
              </Picker>
            </View>
            <View style={s.buttonSection}>
              <Pressable
                onPress={handleSubmit}
                style={[
                  s.buttonContainer,
                  { backgroundColor: isValid ? "#009ce8" : "#a3a1a1" },
                ]}
                disabled={!isValid}
              >
                <Text style={s.buttonText}>Crear Nuevo Cliente</Text>
              </Pressable>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}
const s = StyleSheet.create({
  errorsLabel: {
    color: "red",
  },
  container: {
    flex: 1,
    gap: 15,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  formControl: {
    gap: 10,
  },
  label: {
    fontWeight: "500",
    fontSize: 20,
  },
  input: {
    flex: 0.6,
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 5,
    flexBasis: 45,
  },
  buttonSection: {
    flexDirection: "row",
  },
  buttonContainer: {
    width: "50%",
    height: 45,
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#f3f3f3",
  },
});

export default CompanyForm;
