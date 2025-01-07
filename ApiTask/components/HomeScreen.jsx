import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#D3C0B9'} />
      <View
        style={{
          flex: 1,
          backgroundColor: '#D3C0B9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ListScreen')}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: '#E5A3A5',
            borderColor: 'white',
            borderWidth: 5,
          }}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
            GO!
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;
