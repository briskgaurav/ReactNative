import { View, Text } from 'react-native'
import React from 'react'
import { colorStore } from '@/theme/ColorStore'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
   <View className={`bg-${colorStore.bg} flex-1 items-center justify-center`}>
    <SafeAreaView>
        <Text className={`text-center text-5xl font-bold text-violet-500`}>Home Screen</Text>
 
    </SafeAreaView>

   </View>
  )
}

export default HomeScreen