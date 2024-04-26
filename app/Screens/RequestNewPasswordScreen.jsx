import { View, Text } from 'react-native'
import React from 'react'
import useAuth from '../Hooks/useAuth'

const RequestNewPassword = () => {
  const {forgetPassword} = useAuth()
  return (
    <View>
      <Text>RequestNewPassword</Text>
    </View>
  )
}

export default RequestNewPassword