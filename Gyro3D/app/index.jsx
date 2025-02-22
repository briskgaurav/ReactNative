import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Gyroscope } from "expo-sensors";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useFrame } from "@react-three/fiber";

const lerp = (start, end, alpha) => start + (end - start) * alpha;

const Box = ({ rotation }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = lerp(
        meshRef.current.rotation.x,
        rotation.x,
        0.1
      );
      meshRef.current.rotation.y = lerp(
        meshRef.current.rotation.y,
        rotation.y,
        0.1
      );
      meshRef.current.rotation.z = lerp(
        meshRef.current.rotation.z,
        rotation.z,
        0.1
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
};

const Gyro3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    let subscription;

    const subscribe = async () => {
      const isAvailable = await Gyroscope.isAvailableAsync();
      if (isAvailable) {
        subscription = Gyroscope.addListener(({ x, y, z }) => {
          setRotation({ x, y, z });
        });
        Gyroscope.setUpdateInterval(100); 
      }
    };

    subscribe();
    return () => subscription && subscription.remove();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor:'#F5F1G5' }}>
    
      <Canvas >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 2, 5]} />
        <Box rotation={rotation} />
        {/* <OrbitControls enablePan={false}/> */}
      </Canvas>
      <Text style={styles.text}>
        React Native + React 3 Fiber
      </Text>
      <Text style={styles.text2}>
        Gyroscope Sensor
      </Text>
      <Text style={styles.outline}>
        Gyroscope Sensor
      </Text>
      <Text numberOfLines={1} style={styles.text3}>
      GyroWave
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    position: 'absolute',
    top: '90%',
    left: '50%',
    fontWeight:'bold',
    fontSize:20,
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],  
  },
  text2:{
    position: 'absolute',
    top: '10%',
    textTransform:'uppercase',
    left: '50%',
    fontWeight:'bold',
    fontSize:30,
    zIndex:999,
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],  
  },
  outline:{
    position: 'absolute',
    top: '10%',
    textTransform:'uppercase',
    left: '50%',
    fontWeight:'bold',
    fontSize:30,
    zIndex:999,
    textShadowColor: 'white', // Dark shadow color (intense)
    textShadowRadius: 20,// Radius of the stroke
    shadowOpacity:1,
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],  
  },
  text3:{
    position: 'absolute',
    top: '10%',
    textTransform:'uppercase',
    left: '50%',
    fontWeight:'bold',
    fontSize:80,
    letterSpacing:10,
    color:'grey',
    textAlign:'center',
    opacity:.4,
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],  
    whiteSpace: 'nowrap',
  }
})

export default Gyro3D;
