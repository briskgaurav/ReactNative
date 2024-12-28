import './gesture-handler';

import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import CustomDrawer from './components/CustomDrawer';
import Screen3 from './screens/Screen3';

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props =>
          <CustomDrawer {...props} />
        }>
        <Drawer.Screen name="Home" component={Screen1} />
        <Drawer.Screen name="About" component={Screen2} />
        <Drawer.Screen name="Settings" component={Screen3} />
      </Drawer.Navigator>

      {/*     
     <View>
      <Text>Home</Text>
     </View> */}
    </NavigationContainer>
  );
};

export default App;
