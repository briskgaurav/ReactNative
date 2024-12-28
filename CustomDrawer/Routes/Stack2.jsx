import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import End from '../screens/End';
import About from '../screens/About';

const Stack = createNativeStackNavigator();


const Stack2 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={End} />
        <Stack.Screen name='About' component={About} />
        
    </Stack.Navigator>

)
}

export default Stack2