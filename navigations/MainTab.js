import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Discover from '../pages/Discover';


export default function App() {

    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition:"below-icon",
                tabBarActiveTintColor:"black"
            }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon:  }}/>
            <Tab.Screen name="Restaurants" component={Restaurants}/>
            <Tab.Screen name="Discover" component={Discover}/>
        </Tab.Navigator>
    )
}