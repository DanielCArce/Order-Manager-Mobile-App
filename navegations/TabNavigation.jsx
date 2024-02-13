import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import DashboardTab from '../views/tabs/DashboardTab'
import ReportTab from '../views/tabs/ReportsTab'
import InvoicesTab from './../views/tabs/InvoicesTab';
import SettingsTab from '../views/tabs/SettingsTab'
import ClientsProvidersTab from './../views/tabs/ClientsProvidersTab';

import { AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator()
function IconForTab({ focused, color, size, name = 'home' }) {
    // console.log({color,size, name, focused, name})
    return <AntDesign name={name} size={size} color={color}/>
}
function TabNavigation({ children }){
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name='DashboardTab' component={DashboardTab} options={{ tabBarActiveBackgroundColor: '#d7d7d7', tabBarIcon:IconForTab.bind(this,{name:'home'}),tabBarLabel:'Dashboard'}} />
            <Tab.Screen name="InvoicesTab" component={InvoicesTab} options={{ tabBarActiveBackgroundColor: '#d7d7d7', tabBarIcon: IconForTab.bind(this,{name:'filetext1'}),tabBarLabel:'Invoices'}} />
            {/*  */}
            <Tab.Screen name="ReportTab" component={ReportTab} options={{
                tabBarIcon: IconForTab.bind(this,{name:'barschart'}), tabBarLabel:'Reports'}} />
            <Tab.Screen name="ClientsProvidersTab" component={ClientsProvidersTab} options={{ tabBarActiveBackgroundColor: '#d7d7d7', tabBarIcon: IconForTab.bind(this,{name:'user'}),tabBarLabel:'Clients & Providers' }}/>
            <Tab.Screen name="SettingsTab" component={SettingsTab} options={{tabBarIcon:IconForTab.bind(this,{name:'setting'}), tabBarLabel:'Settings'}}/>
        </Tab.Navigator>
    )
}

export default TabNavigation