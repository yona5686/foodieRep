import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import DisconnectHeader from '../components/DisconnectHeader';

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Discover from '../pages/Discover';


export default function App( {navigation} ) {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition:"below-icon",
                tabBarActiveTintColor:"black"
            }}>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused, color}) => (<Ionicons name='home' size={20} color={focused ? "#067506": color}/>),
                headerRight: () => (<DisconnectHeader nav = {navigation}/>)
            }}/>

            <Tab.Screen name="Restaurants" component={Restaurants} options={{
                tabBarIcon: ({focused, color}) => (<Ionicons name='restaurant' size={20} color={focused ? "#067506": color}/>),
                headerRight: () => (<DisconnectHeader nav = {navigation}/>)
            }}/>

            <Tab.Screen name="Discover" component={Discover} options={{
                tabBarIcon: ({focused, color}) => (<Ionicons name='search' size={20} color={focused ? "#green": color}/>),
                headerRight: () => (<DisconnectHeader nav = {navigation}/>)
            }}/>

        </Tab.Navigator>
    )
}