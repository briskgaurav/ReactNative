import {View, Text, Button} from 'react-native';
import React from 'react';
import End from './End';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

const About= ({route}) => {
  const {data} = route.params;
  return (
    <View style={{backgroundColor:'gray', flex:1}}>
      <Text>{data.des}</Text>

      {/* <Button
        onPress={() => navigation.navigate('End')}
        title="Go End Page"></Button>
      <Button onPress={() => navigation.goBack()} title="Go Back "></Button> */}
    </View>
  );
};

export default About;
