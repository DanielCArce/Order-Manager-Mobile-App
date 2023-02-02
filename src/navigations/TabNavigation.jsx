import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTab from '../screens/Dashboard'
import ReportsTab from '../screens/Reports'
import SettingsTab from '../screens/Settings'
import ClientsProviders from '../screens/ClientsProviders';

const Tab = createBottomTabNavigator();
function TabNavigation(){
  return (
      <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Dashboard" options={{headerShown:false, tabBarLabel:'Ordenes',}} component={DashboardTab} />
      <Tab.Screen name='Reports' options={{ headerShown: false, tabBarLabel:'Reportes' }} component={ReportsTab} />
      <Tab.Screen name='ClientsProviders' options={{ headerShown: false, tabBarLabel:'Clientes y Proveedores'}} component={ClientsProviders} />
      <Tab.Screen name='Settings' options={{headerShown:false,tabBarLabel:'Configuración'}} component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default TabNavigation