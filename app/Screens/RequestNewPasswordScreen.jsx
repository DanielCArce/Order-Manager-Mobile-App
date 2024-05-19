import { View, Text, StyleSheet, SafeAreaView, Platform  } from 'react-native'
import React from 'react'
import AppHeader from '../Components/AppHeader'
import ResetPasswordForm from '../Components/ResetPasswordForm'

const RequestNewPassword = () => {
	return (
		<SafeAreaView style={s.safeContainer}>
			<View style={s.container}>
				<AppHeader />
				<View style={s.contentContainer}>
					<Text style={s.textHeader}>Restablecer Contraseña</Text>
				<ResetPasswordForm/>
				</View>
			</View>
	  </SafeAreaView>
  )
}

const s = StyleSheet.create({
	safeContainer: {
		flex: 1
	},
	container: {
		flex: 1,
		marginTop: Platform.OS == "android" ? 25 : 0,
		paddingHorizontal:30
	},
	textHeader: {
	fontSize: 34,
	textAlign: 'center'
},contentContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  }
})
export default RequestNewPassword