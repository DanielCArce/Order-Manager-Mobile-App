import React, { useRef, useState } from 'react'
import { Animated, Pressable, Text } from 'react-native'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

function FloatingMenu() {
    const animBottomRef = useRef(new Animated.Value(-100)).current
    const animRightRef = useRef(new Animated.Value(0)).current
    const navigation = useNavigation()
  const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        
      setIsOpen(true)
      Animated.sequence([
        Animated.timing(animBottomRef, {
          toValue: 95,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(animRightRef, {
          toValue: 35,
          duration: 1000,
          useNativeDriver:false
        })
      ]).start()
    }
    const closeMenu = () => {
      setIsOpen(false)
      Animated.sequence([
        Animated.timing(animBottomRef, {
          toValue: -100,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(animRightRef, {
          toValue: 0,
          duration: 1000,
          useNativeDriver:false
        })
      ]).start()
    }
    const closeAndMove = (screen) => {
        closeMenu()
        navigation.navigate(screen)
    }
    return (
        <>
            <Animated.View style={[{ position:'absolute', backgroundColor: '#f52d56',
     width: "50%",
     height: 95,
     borderRadius: 8,
     justifyContent: 'center',
     alignItems: 'center',},{bottom:animBottomRef, right:animRightRef, backgroundColor:'#ffffff', paddingVertical:4, paddingHorizontal:6,gap:10, justifyContent:'center', alignContent:'center', textAlign:'center'}]}>
                <Pressable onPress={closeAndMove.bind(this,'NewOrderScreen')}>
                    <Text>Nueva Orden</Text>
                </Pressable>
                <Pressable onPress={closeAndMove.bind(this,'AddNewClientScreen')}>
                    <Text>Nuevo Cliente</Text>
                </Pressable>
                <Pressable onPress={closeAndMove.bind(this,'AddNewUserScreen')}>
                    <Text>Nuevo Usuario</Text>
                </Pressable>
        </Animated.View>
            <Pressable onPress={(e) => {
                isOpen ? closeMenu() : openMenu()
            }} style={{ paddingVertical: 6, paddingHorizontal: 5, backgroundColor: "#d32", borderRadius:50, position:'absolute', right:5, bottom:50}}>
            <Icon name="plus" size={25} color="#a3a3a3" />
      </Pressable>
        </>
    )
}

export default FloatingMenu