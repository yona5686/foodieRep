import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetStarted from './pages/GetStarted';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Discover from './pages/Discover';


export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" options={{ headerShown: false }} component={() => (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Restaurants" component={Restaurants}/>
            <Tab.Screen name="Discover" component={Discover}/>
          </Tab.Navigator>
        )} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}