import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

export default function App(): JSX.Element {
 
  const [background, setBackground] = useState('#FFFFFF')
  const [Square, setSquare] = useState('#HGads1')
  const [Circle, setCircle] = useState("#AHGSAJ")
  const [reactangle, setRectangle] = useState("#AHGSAJ")

  const Disco = () => {
    const hex:string = '0123456ABCDEF'
    let color:string  = "#";
    let square:string  = "#";
    let circle:string  = "#";
    let rect:string  = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
      square += hex[Math.floor(Math.random() * 12)];
      circle += hex[Math.floor(Math.random() * 7)];
      rect += hex[Math.floor(Math.random() * 8)];
    }

    setBackground(color);
    setCircle(circle);
    setRectangle(rect);
    setSquare(square);
    
  }

  return (
    <>
      <StatusBar backgroundColor={'red'}></StatusBar>
      <View style={[styles.bg, {backgroundColor: background}]}>
        <TouchableOpacity onPress={Disco}>
          <View style={styles.Btn}>
            <Text style={styles.textbtn}>Disco 🪩</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.Cube , {backgroundColor: Square}]} ></View>
        <View style={[styles.circle , {backgroundColor: Circle}]} ></View>
        <View style={[styles.hexagon, {backgroundColor: reactangle}]} ></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Btn: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderBlockColor:'black',
    borderWidth: 2,
  },
  textbtn: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Cube: {
    height: 140,
    width: 140,
    position: 'absolute',
    top: 50,
    right: -20,
    borderRadius:5,
    borderWidth:2,
    
  },
  circle: {
    height: 200,
    width: 200,
    position: 'absolute',
    bottom: 100,
    left: -100,
    borderRadius:"100%",
    borderWidth:2,

  },
  hexagon: {
    height: 160,
    width: 150,
    position: 'absolute',
    bottom: 50,
    right: -50,
    borderRadius:5,
    borderWidth:2,
  }
});
