import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AppHeader = ({ moveToScreen = 'HomeScreen' }) => {
    const navigator = useNavigation()
    const handleClick = () => {
        navigator.navigate(moveToScreen)
    }
  return (
      <View>
          <Pressable onPress={handleClick}>              
            <View>
                <Text style={[styles.text,styles.header]}>FINA</Text>
            </View>
          </Pressable>
          <View>
              <Text style={[styles.text,styles.subHeader]}>
                  Gestión de Ordenes
              </Text>
          </View>
    </View>
  )
}
const styles = StyleSheet.create({
    text: {
        textAlign:'center'
    },
    header: {
        fontSize: 48,
        fontWeight: '800'
    },
    subHeader: {
        fontSize: 20,
        fontStyle:'italic'
    }
})

export default AppHeader