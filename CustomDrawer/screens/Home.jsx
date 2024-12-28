import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import Profile from './Profile';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MoviesData} from '../store/Dummydata';

// type HomeProps = {
//   navigation: BottomTabNavigationProp<any>;
// };

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', padding: 20}}>
      {MoviesData.map(data => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {data})}
          style={{
            width: '100%',
            marginBottom: 10,
            height: 130,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 30}}>{data.title}</Text>
          <Text style={{color: 'white', fontSize: 15}}>Genere:{data.genre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Home;
