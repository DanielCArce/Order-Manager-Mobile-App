import { View, Text, SafeAreaView, Platform, Switch, FlatList, ScrollView, Pressable, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import useContent from '../Hooks/useContent'
import Modal from '../Components/Modal'
import AppHeader from './../Components/AppHeader';
import {MaterialCommunityIcons} from '@expo/vector-icons'
const ClientsTab = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [clientDetails, setClientDetails] = useState({})
  const { ContentState, getClients } = useContent()
  const handleModal = (e) => setIsEnabled(prev => !prev)
    useEffect(function () {
    getClients()
  },[])
  return (
      <SafeAreaView>
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
                    <MaterialCommunityIcons name="circle-edit-outline" size={24}/>
                    <MaterialCommunityIcons name="delete-outline" size={24}/>
                    <MaterialCommunityIcons name="eye" size={24} onPress={() => {
                      setClientDetails(client)
                      handleModal()
                    }}/>
                  </View>
                </View>
            )
          })
        }
        </ScrollView>
        <Modal isShow={isEnabled} info={clientDetails} click={( handleModal) } />
      </View>
      <StatusBar/>
    </SafeAreaView>
  )
}

export default ClientsTab