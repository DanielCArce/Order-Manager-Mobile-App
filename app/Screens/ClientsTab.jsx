import { View, Text, SafeAreaView, Platform, Switch, FlatList, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import useContent from '../Hooks/useContent'
import Modal from '../Components/Modal'
import AppHeader from './../Components/AppHeader';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import useAuth from './../Hooks/useAuth';
const ClientsTab = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  const [clientDetails, setClientDetails] = useState({})
  const { ContentState, getClients } = useContent()
  const handleModal = (e) => setIsEnabled(prev => !prev)
  const {SignOut} = useAuth()
    useEffect(function () {
    getClients()
  },[])
  return (
      <SafeAreaView>
      <View style={[Platform.OS == "web" || Platform.OS == "android" ? { marginTop: 50, marginHorizontal: 30 } : null]}>
        <View style={{marginBottom:15}}>
        <AppHeader />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View>
            <Text>Nombre</Text>
          </View>
        </View>
        <ScrollView>
          {ContentState.clients.map((client) => {
            return (
              <View key={client.id} style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                <View>
                  <Text>{client.name }</Text>
                </View>
                <Pressable onPress={() => {
                  setClientDetails(client)
                  handleModal()
                }}>
                  <MaterialCommunityIcons name='eye-plus' size={24} />
                </Pressable>
              </View>
            )
          })}
        </ScrollView>
        <Pressable onPress={SignOut}>
          <Text>Salirse</Text>
        </Pressable>
        <Modal isShow={isEnabled} info={clientDetails} click={ handleModal } />
      </View>
    </SafeAreaView>
  )
}

export default ClientsTab