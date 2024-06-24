import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Restaurants from '../pages/Restaurants';
import Discover from '../pages/Discover';


export default function App() {

  const Tab = createBottomTabNavigator();

  return(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Restaurants" component={Restaurants}/>
        <Tab.Screen name="Discover" component={Discover}/>
    </Tab.Navigator>
  )
}