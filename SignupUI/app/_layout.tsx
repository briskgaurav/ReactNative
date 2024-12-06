import React from 'react'
import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
import { colorStore } from '@/theme/ColorStore';
import { DarkTheme } from '@react-navigation/native';


const rootLayout = () => {
  return (
    <>

    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' />
        <Stack.Screen name='SignupScreen' />
        <Stack.Screen name='LoginScreen' />
        <Stack.Screen name='HomeScreen' />
    </Stack>
    <StatusBar backgroundColor={colorStore.bg} barStyle={'dark-content'} />
    </>
  
  )
}

export default rootLayout;