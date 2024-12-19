import { View, Text, SafeAreaView, StyleSheet, Button, useColorScheme } from 'react-native'
import React from 'react'

const App = () => {

  const theme = useColorScheme() === 'dark';
  return (
      <SafeAreaView>
        <View style={theme ? style.mainDark : style.mainLight}>
           <Text style={theme ? style.textDark : style.textLight}>THIS IS MY PROJECT FIRST</Text>
           <Text style={style.text2}>Change Color On Device Theme</Text>
           
        </View>

      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  mainLight:{
    height: '100%',
    width: '100%',
    backgroundColor: 'wheat',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  mainDark:{
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  textDark: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#dddddd',
  },
  textLight: {
    fontSize:24,
    fontWeight: 'bold',
    color: 'black',
  },
  text2: {
    marginTop:10,
    fontWeight: 'bold',
    color: 'blue',

  },
})

export default App