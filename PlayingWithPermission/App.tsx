import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const Gallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const OpenCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('image');
    });
  };

  const ChooseVideo = () => {
    ImagePicker.openPicker({
      mediaType: 'video',
    }).then(video =>  {
      console.log(video , "video");
    });
  };
  const OpenFrontCam = () => {
    ImagePicker.openCamera({
      useFrontCamera: true,
    }).then(pic => {
      console.log(pic);
    });
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.Buttons} onPress={Gallery}>
        <Text>Open Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Buttons} onPress={OpenCamera}>
        <Text>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Buttons} onPress={ChooseVideo}>
        <Text>Open Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Buttons} onPress={OpenFrontCam}>
        <Text>Open FrontCamera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Buttons: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'yellow',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default App;
