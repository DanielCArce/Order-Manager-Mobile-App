import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';

const RequestNewPassword = () => {
  const navigation = useNavigation()
  const router = useRoute()
  return (
    <View>
      <Formik initialValues={{ email: router.params.email }} onSubmit={(values) => {
        console.log({values, email: router.params.email})
      }}>
        {
          ({ handleSubmit, handleBlur, handleChangeText }) => {
            
          }
        }
      </Formik>
    </View>
  )
}

export default RequestNewPassword