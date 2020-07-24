import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Maps from './src/screens/Maps';
import Realtime from './src/screens/Realtime';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Realtime" component={Realtime} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
