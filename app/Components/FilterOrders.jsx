import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useContent from '../Hooks/useContent'

const FilterOrders = () => {
  const {setFilter, ContentState}  = useContent()
  return (
    <View style={{
      flexDirection: 'row',
      gap:8
    }}>
      <Pressable style={[{paddingVertical:5, paddingHorizontal:5},ContentState.filterBy == 'ALL' ? {borderBottomColor:'#000000', borderBottomWidth:1}:null]} onPress={()=> setFilter('ALL') }>
        <Text>Todas</Text>
      </Pressable>
      <Pressable style={[{paddingVertical:5, paddingHorizontal:5},ContentState.filterBy == 'ON_PROCESS' ? {borderBottomColor:'#000000', borderBottomWidth:1}:null]} onPress={()=> setFilter('ON_PROCESS')}>
        <Text>En Proceso</Text>
      </Pressable>
      <Pressable style={[{paddingVertical:5, paddingHorizontal:5},ContentState.filterBy == 'COMPLETED' ? {borderBottomColor:'#000000', borderBottomWidth:1}:null]} onPress={()=> setFilter('COMPLETED')}>
        <Text>Completas</Text>
      </Pressable>
    </View>
  )
}

export default FilterOrders