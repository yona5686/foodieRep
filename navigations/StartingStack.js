import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from '../pages/GetStarted'
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import MainTabs from './MainTab';


export default function StartingStack() {

  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" options={{ headerShown: false }} component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}