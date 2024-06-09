import { View, Text} from 'react-native'
import React from 'react'

import AddUserForm from '../Components/AddUserForm'
const AddNewUserScreen = () => {
  return (
      <View style={{ paddingHorizontal: 30, marginTop: 15 }}>
          <Text style={{textAlign:'center', fontSize:34, marginBottom:25}}>Nuevo Usuario</Text>
          <AddUserForm/>
    </View>
  )
}

export default AddNewUserScreen