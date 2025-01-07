import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import axios from 'axios';

const App = () => {
  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  //server side
  instance.interceptors.request.use(config => {
    config.meta = {startTime: Date.now()};
    return config;
  });
  //client
  instance.interceptors.response.use(response => {
    const {startTime} = response.config.meta;
    const endTime = Date.now();
    const duration = ( (endTime - startTime )/1000 );
    console.log(duration);
  });

  const fetchApi = async path => {
    try {
      const response = await instance.get(path);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <Button
        title="Button 1"
        onPress={() => {
          fetchApi('/posts');
        }}
      />
      <Button title="Button 2" onPress={() => fetchApi('/posts')} />
      <Button title="Button 3" onPress={() => fetchApi('/comments')} />
      <Button title="Button 4" onPress={() => fetchApi('/photos')} />
      <Button title="Button 5" onPress={() => fetchApi('/albums')} />
        <Text>Thanks</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#1B1B1D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default App;
