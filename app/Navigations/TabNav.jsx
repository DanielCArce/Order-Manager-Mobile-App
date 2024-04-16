import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DashboardTab from "../Screens/DashboardTab"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ClientsTab from "../Screens/ClientsTab"
const Tab = createBottomTabNavigator()

function TabNav({ children }) {
    return (
        <Tab.Navigator initialRouteName="DashboardTab" screenOptions={{headerShown:false}}>
            <Tab.Screen name="DashboardTab" component={DashboardTab} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />
                , tabBarLabel: 'Inicio'
            }} />
            <Tab.Screen name="ClientsTab" component={ClientsTab} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="account-supervisor" size={24} color="black" />
, tabBarLabel:'Clientes'}} />
        </Tab.Navigator>
    )
}
export default TabNav