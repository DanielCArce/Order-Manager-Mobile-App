import { View, Text } from 'react-native'
import React from 'react'
import CompanyForm from '../Components/CompanyForm'

const AddNewCompanyScreen = () => {
  return (
    <View style={{flex:1, marginTop:35}}>
      <CompanyForm/>
    </View>
  )
}

export default AddNewCompanyScreen