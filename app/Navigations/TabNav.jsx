import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashboardTab from "../Screens/DashboardTab"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ClientsTab from "../Screens/ClientsTab"
import OrdersTab from "../Screens/OrdersTab"
import SettingsTab from "../Screens/SettingsTab"
const Tab = createBottomTabNavigator()

function TabNav({ children }) {
    return (
        <Tab.Navigator initialRouteName="DashboardTab" screenOptions={{headerShown:false}}>
            <Tab.Screen name="DashboardTab" component={DashboardTab} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />
                , tabBarLabel: 'Inicio'
            }} />
            <Tab.Screen name="OrderTab" component={OrdersTab} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="chart-box-outline" size={24} color="black" />
                , tabBarLabel: 'Ordenes'}} />
            <Tab.Screen name="ClientsTab" component={ClientsTab} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="account-supervisor" size={24} color="black" />
, tabBarLabel:'Clientes'}} />
            <Tab.Screen name="SettingsTab" component={SettingsTab } options={{
                tabBarIcon: () => <MaterialCommunityIcons name="account-supervisor" size={24} color="black" />
, tabBarLabel:'Configuración'}}/>
        </Tab.Navigator>
    )
}
export default TabNav