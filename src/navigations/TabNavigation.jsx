import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTab from '../screens/Dashboard'
import ReportsTab from '../screens/Reports'
import SettingsTab from '../screens/Settings'

const Tab = createBottomTabNavigator();
function TabNavigation(){
  return (
      <Tab.Navigator>
      <Tab.Screen name="Dashboard" options={{headerShown:false}} component={DashboardTab} />
      <Tab.Screen name='Reports' options={{headerShown:false}} component={ReportsTab} />
      <Tab.Screen name='Settings' options={{headerShown:false}} component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default TabNavigation