import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
} from 'react-native';
import Form from './components/Form';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const {width, height} = Dimensions.get('screen');
  console.log(width);
  const ModalWidth = width * 0.9;
  const handleModal = () => {
    setModalVisible(prev => !prev);
  };
  return (
    <View style={styles.centeredView}>
      <Text
        style={{
          position: 'absolute',
          top: '40%',
          fontWeight: 'bold',
          fontSize: 50,
          textAlign: 'center',
          color: 'white',
        }}>
        Modal Assignment
      </Text>
      <Pressable
        style={styles.Button}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>ShowForm</Text>
      </Pressable>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        animationType="slide">
        <View style={styles.modalView}>
          <View
            style={[
              styles.innerView,
              {width: ModalWidth, minHeight: '45%', height: 'auto'},
            ]}>
            <Pressable
              style={{
                position: 'absolute',
                padding: 10,
                borderRadius: '100%',
                backgroundColor: '#EFEFEF',
                top:-5,
                right: -10,
                position:'absolute'
              }}
              onPress={handleModal}>
              <Text>❌</Text>
            </Pressable>

            <Form handleModal={handleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#5B79C8',
  },
  Button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#3C329A',
    borderRadius: 10,
    marginBottom: 20,
  },
  modalView: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'relative',
    opacity: 0.9,
  },
  innerView: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#AFE4ED',
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
