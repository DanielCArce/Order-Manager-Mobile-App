import { View, Text, SafeAreaView, Platform, Switch, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useContent from '../Hooks/useContent'

const ClientsTab = () => {
  const [isEnabled, setIsEnabled] = useState(false)
    const { ContentState, getClients } = useContent()
    useEffect(function () {
    getClients()
  },[])
  return (
      <SafeAreaView>
        <View style={[Platform.OS == "web" || Platform.OS == "android" ? { marginTop: 50, marginHorizontal:30 } : null]}>
        <Text>Holii {JSON.stringify(ContentState.clients)}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View>
            <Text>Nombre</Text>
          </View>
          <View>
            <Text>Correo Electrónico</Text>
          </View>
          <View>
            <Text>Factura Electrónica</Text>
          </View>
        </View>
        <ScrollView>
          {ContentState.clients.map((client) => {
            return (
              <View key={client.id} style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View>
                  <Text>{client.name }</Text>
                </View>
                <View>
                  <Text>{client.email}</Text>
                </View>
                <View>
<Switch trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e" onValueChange={(value) => {
            console.log({ value })
            setIsEnabled((preVal) => !preVal)
          }} value={client.isFE} />
                </View>
              </View>
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ClientsTab