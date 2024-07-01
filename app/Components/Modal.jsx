import { View, Text, Modal as ModalRN, Switch, StyleSheet } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useContent from '../Hooks/useContent';
const Modal = ({ isShow, click }) => {
    const {updateClient,ContentState} = useContent()
    const toggleInfo = (val) => {
        updateClient(ContentState.client.id, { "isFE": val })
    }
    
  return (
      <ModalRN animationType='slide' visible={isShow} transparent={true}>
          <View style={{ backgroundColor: 'lightgray', flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 35, paddingHorizontal: 10, borderRadius: 15}}>
              <View style={{ backgroundColor: 'white', flex: .85, paddingVertical: 15, paddingHorizontal: 10, gap:15, borderRadius:5 }}>
                  <MaterialCommunityIcons size={24} name="close" style={{alignSelf:'center'} } onPress={click}/>
                  <Text style={{ fontWeight: '700', fontSize: 26, fontStyle: 'italic', textTransform: 'uppercase', textAlign: 'center' }}>{ContentState.client.name}</Text>
                  <Text style={{ fontWeight: '400', fontSize: 16, textTransform: 'capitalize', textAlign: 'center' }}>{ContentState.client.type == "FACTORY" ? "Fabricante" : "Peletero"}</Text>
                  <Text>Correo Electrónico: {ContentState.client.email}</Text>
                  <Text>Factura Electrónica:</Text>
                  <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                      <Text>{ JSON.stringify(ContentState.client.isFE)}</Text>
                      <Text>No</Text>
                      <Switch onValueChange={toggleInfo} value={ContentState.client.isFE} thumbColor={ContentState.client.isFE ? '#0080ff' : '#c0c0c0' } trackColor={{false:'#c0c0c0', true:'#0080ff'}}/>
                      <Text>Si</Text>
                    </View>
                  <Text>Tiene {ContentState.orders.filter((val)=> val.clientID == ContentState.client.id).length } ordenes realizadas.</Text>
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