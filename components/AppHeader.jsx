import { View, Text, Pressable, Animated } from 'react-native'
import React,{useLayoutEffect, useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
const AppHeader = ({ screen = 'Login', tab = undefined}) => {
    const navigation = useNavigation()
    const handleOnPres = () => {
        if (tab !== undefined) {
            return navigation.navigate(screen,{screen: tab})
        }
        return navigation.navigate(screen)
    } 
    return (
        <View style={{ alignSelf: 'center', marginTop: 40 }}>
            <View>
                <Pressable onPress={handleOnPres}>
                    <Text style={{ fontSize: 40, fontWeight: 800, textAlign: 'center' }}>FINA</Text>
                </Pressable>
            </View>
            <View>
                <Text>Finances & Accounting</Text>
            </View>
        </View>
  )
}

export default AppHeader