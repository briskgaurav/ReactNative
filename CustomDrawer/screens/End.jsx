import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {AccountsData} from '../store/Dummydata';

const End = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'gray', padding: 20}}>
      {AccountsData.map((data, id) => (
        <TouchableOpacity key={data.id}
          onPress={() => navigation.navigate('About', {data})}
          style={{
            width: '100%',
            marginBottom: 10,
            height: 50,
            backgroundColor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>{data.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default End;
