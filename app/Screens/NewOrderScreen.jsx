import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import {Picker} from '@react-native-picker/picker'
import {Formik} from 'formik'
import useContent from './../Hooks/useContent';
import AddItemScheme from '../Schemas/AddItemsScheme';
const NewOrderScreen = () => {
    const { ContentState, getClients, addNewOrder } = useContent()
    useEffect(function () {
        getClients()
     },[])
    return (
        <Formik initialValues={{ clientID: 1, items: [] }} onSubmit={(values) => {
            console.log({ values })
        }}>
            {
                ({values:valuesGlobal, handleBlur, handleChange, handleSubmit, setFieldValue}) => {
                    return (<>
                        <View style={{flex:1, marginHorizontal:30}}>
                            {/* <Text>{JSON.stringify(valuesGlobal) }</Text> */}
                            <View style={{flex:1}}>
                                <Text style={{fontSize:26, fontWeight:'600', textAlign:'center'}}>Información de Cliente</Text>
                            </View>
                            <View style={{flex:1, marginBottom:5}}>
                                <View>
                                    <Text>Cliente:</Text>
                                </View>
                                <Picker selectedValue={valuesGlobal.clientID} onValueChange={(item)=> setFieldValue('clientID', item)}>
                                    { ContentState.clients.map((client) => {
                                        return (
                                            <Picker.Item key={client.id} label={client.name } value={client.id}/>
                                        )
                                    })}
                                </Picker>
                            </View>
                            <Formik initialValues={{ size: 0, quantity: 0, unid: '', description: '', type: '' }} onSubmit={(values) => {
                                console.log({ values })
                                setFieldValue('items', [...valuesGlobal.items, { ...values, size: Number(values.size), quantity: Number(values.quantity), id: valuesGlobal.items.length + 1 }])
                            }} validationSchema={AddItemScheme}>{({ values, handleBlur, handleChange, handleSubmit: handleInsideSubmit, setFieldValue: setInsideFormValue, errors }) => {
                                return (<>
                                    <View style={{flex:1}}>
                                <Text>Tamaño:</Text>
                                <TextInput placeholder={errors.size} onBlur={handleBlur('size')} onChangeText={handleChange('size')}/>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Cantidad:</Text>
                                <TextInput placeholder={errors.quantity} onBlur={handleBlur('quantity')} onChangeText={handleChange('quantity')}/>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Color:</Text>
                                        <TextInput placeholder={errors.description} onBlur={ handleBlur('description')} onChangeText={handleChange('description')} />
                            </View>
                            <View style={{flex:1}}>
                                <Text>Unidad:</Text>
                                <Picker selectedValue={values.unid} onValueChange={(item)=> setInsideFormValue('unid',item)} placeholder={errors.unid}>
                                    <Picker.Item label='Paquete' value='Paquete' />
                                    <Picker.Item label='Docena' value='Docena' />
                                    <Picker.Item label='Par' value='Par'/>
                                </Picker>
                            </View>
                            <View style={{flex:1}}>
                                <Text>Tipo:</Text>
                                <Picker selectedValue={values.type} onValueChange={(item)=> setInsideFormValue('type', item)} placeholder={errors.type}>
                                    <Picker.Item label='Plano' value='Plano' />
                                    <Picker.Item label='Redondo' value='Redondo' />
                                </Picker>
                            </View>
                            <View style={{flex:1}}>
                                        <Pressable onPress={handleInsideSubmit()}>
                                    <Text>Agregar Articulo</Text>
                                </Pressable>
                            </View>
                                </>)
                            }}
                                </Formik>
                        </View>
                    </>)
                }
            }
        </Formik>
  )
}

export default NewOrderScreen