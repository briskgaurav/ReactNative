import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Stack1 from './Routes/Stack1';
import Stack2 from './Routes/Stack2';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator  screenOptions={{headerShown:false, tabBarActiveBackgroundColor:'aqua', tabBarInactiveBackgroundColor:"aqua"}}>
        <Tab.Screen name="Movies" component={Stack1} />
        <Tab.Screen name="Setting" component={Stack2} />
      </Tab.Navigator>

        {/* <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="End" component={End} />
        </Drawer.Navigator> */}
      </NavigationContainer>
  );
};

export default App;
