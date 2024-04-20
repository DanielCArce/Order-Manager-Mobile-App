import { View, Text, Modal as ModalRN, Pressable, Switch, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Modal = ({ isShow, info, click }) => {
    const [data, setData] = useState({})
    const toggleInfo = (val) => {
        setData((prevVal) => {
            return {
                ...prevVal,
                isFE: !prevVal.isFE
            }
        })
    }
useEffect(function () {
        setData(info)
}, [info])
    
  return (
      <ModalRN animationType='slide' visible={isShow} >
          
          <View key={data.id} style={{paddingVertical:15, paddingHorizontal:30}}>
              <Pressable onPress={click} style={{alignSelf:'center'}}>
                  <MaterialCommunityIcons size={24 } name='close'/>
              </Pressable>
          <View style={styles.rows}>
              <View>
                  <Text>Nombre:</Text>
              </View>
              <View>
                  <Text>{ data.name}</Text>
              </View>
          </View>
          <View style={styles.rows}>
              <View>
                  <Text>Factura Electrónica:</Text>
              </View>
              <View>
                      <Switch value={data.isFE} trackColor={{ false: 'red', true: 'blue' }} thumbColor={info.isFE ? 'orange' : 'gray'} onValueChange={toggleInfo} />
              </View>
          </View>
          <View style={styles.rows}>
              <View>
                  <Text>Correo Electrónico:</Text>
              </View>
              <View>
                  <Text>
                      {data.email}
                  </Text>
              </View>
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