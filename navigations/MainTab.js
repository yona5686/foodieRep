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
                tabBarActiveTintColor:"green"
            }}>

            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: () => (<Ionicons name='home' size={20}/>),
                headerRight: () => (<DisconnectHeader nav = {navigation}/>)
            }}/>

            <Tab.Screen name="Restaurants" component={Restaurants} options={{
                tabBarIcon: () => (<Ionicons name='restaurant' size={20}/>),
                headerRight: () => (<DisconnectHeader nav = {navigation}/>)
            }}/>

            <Tab.Screen name="Discover" component={Discover} options={{
                tabBarIcon: () => (<Ionicons name='search' size={20}/>),
                headerRight: () => (<DisconnectHeader nav = {navigation}/>)
            }}/>

        </Tab.Navigator>
    )
}