import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorStore } from '@/theme/ColorStore'

const Button = (props:any) => {
  return (
    <TouchableOpacity onPress={props.handleButtonClick} activeOpacity={0.5} style={{backgroundColor:colorStore.button , borderRadius:10}} className='flex items-center justify-center w-full py-5'>
        <Text className='font-bold '>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default Button