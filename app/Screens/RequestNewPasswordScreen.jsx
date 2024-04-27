import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import useAuth from '../Hooks/useAuth'
import RequestNewPasswordScheme from '../Schemas/RequestNewPassowrdScheme'
import { Formik } from 'formik'

const RequestNewPassword = () => {
  const {forgetPassword} = useAuth()
  return (
    <>
		  <Formik initialValues={{ username: '' }} validationSchema={RequestNewPasswordScheme} onSubmit={(values) => {
			  forgetPassword(values.username)
		  }}>
			  {({ values, handleBlur, handleChange, handleSubmit }) => {
				  return (
					  <>
						  <View>
							  
						  <View>
							  <Text>Username</Text>
							  <TextInput onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username} />
						  </View>
							  <View>
								  <Pressable onPress={handleSubmit}>
									  <Text>Request Password</Text>
								  </Pressable>
						  </View>
					  </View>
					  </>
				  )
			  }}
	  </Formik>
    </>
  )
}

export default RequestNewPassword