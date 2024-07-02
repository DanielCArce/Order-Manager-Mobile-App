import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import useContent from '../Hooks/useContent';
import Modal from '../Components/Modal';
import AppHeader from './../Components/AppHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ClientsTab = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const { ContentState, getClients, inactiveClient, setCurrentClient } = useContent()
  const handleModal = (e) => setIsEnabled(prev => !prev)
    useEffect(function () {
    getClients()
  },[])
  return (
      <SafeAreaView style={{flex:1}}>
      <View style={{marginHorizontal: 30 }}>
        <View style={{marginBottom:15}}>
          <AppHeader />
          <Text style={{fontSize:28, textAlign:'center', marginVertical:15, fontWeight:'700'}}>Clientes</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View>
            <Text>Nombre</Text>
          </View>
          <View>
            <Text>Acciones</Text>
          </View>
        </View>
        <ScrollView>
          {ContentState.clients.map((client) => {
            return (
                <View style={{flexDirection:'row', justifyContent:'space-between'}} key={client.id}>
                  <View>
                    <Text>{ client.name}</Text>
                  </View>
                  <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <MaterialCommunityIcons name="delete-outline" size={24} onPress={() => {
                    inactiveClient(client.id)
                  }} />
                    <MaterialCommunityIcons name="eye" size={24} onPress={() => {
                      setCurrentClient(client)
                      handleModal()
                    }}/>
                  </View>
                </View>
            )
          })
        }
        </ScrollView>
        <Modal isShow={isEnabled} click={( handleModal) } />
      </View>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default ClientsTab