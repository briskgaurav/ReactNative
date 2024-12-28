import {View, Text} from 'react-native';
import React from 'react';

const Profile = ({route}) => {
  const {data} = route.params;
  return (
    <View style={{flex: 1, backgroundColor: 'gray', padding: 20}}>
      <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
        {data.title}
      </Text>
      <Text style={{color: 'white', fontSize: 20, marginBottom: 50}}>
        {data.genre}
      </Text>
      <Text style={{color: 'white', fontSize: 15, marginBottom: 30}}>
        {data.des}
      </Text>
      <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
        Casting
      </Text>
      <Text style={{color: 'white', fontSize: 15}}>{data.cast}</Text>
    </View>
  );
};

export default Profile;
