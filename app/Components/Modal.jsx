import { View, Text, Modal as ModalRN, Pressable, Switch, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useContent from '../Hooks/useContent';
const Modal = ({ isShow, info, click }) => {
    const [data, setData] = useState({})
    const {updateClient,ContentState} = useContent()
    const toggleInfo = (val) => {
        setData((prevVal) => {
            return {
                ...prevVal,
                isFE: !prevVal.isFE
            }
        })
        updateClient(data.id, {"isFE": data.isFE})
    }
useEffect(function () {
    setData(info)
    console.log({info})
}, [info])
    
  return (
      <ModalRN animationType='slide' visible={isShow} transparent={true}>
          <View style={{ backgroundColor: 'lightgray', flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 35, paddingHorizontal: 10, borderRadius: 15}}>
              <View style={{ backgroundColor: 'white', flex: .85, paddingVertical: 15, paddingHorizontal: 10, gap:15, borderRadius:5 }}>
                  <MaterialCommunityIcons size={24} name="close" style={{alignSelf:'center'} } onPress={click}/>
                  <Text style={{ fontWeight: '700', fontSize: 26, fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center' }}>{data.name}</Text>
                  <Text style={{ fontWeight: '400', fontSize: 16, textTransform: 'capitalize', textAlign: 'center' }}>{data.type == "FACTORY" ? "Fabricante" : "Peletero"}</Text>
                  <Text>Correo Electrónico: {data.email}</Text>
                  <Text>Factura Electrónica:</Text>
                  <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
                      <Text>Si</Text>
                      <Switch onValueChange={toggleInfo} value={data.isFE} thumbColor={data.isFE ? '#0080ff' : '#c0c0c0' } trackColor={{false:'#c0c0c0', true:'#0080ff'}}/>
                      <Text>No</Text>
                    </View>
                  <Text>Tiene {ContentState.orders.filter((val)=> val.clientID == data.id).length } ordenes realizadas.</Text>
              </View>
          </View>
          </ModalRN>
  )
}

const styles = StyleSheet.create({
    rows: {
        flexDirection: 'row',
        gap:10
    }
})
export default Modal