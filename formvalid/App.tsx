// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import About from './component/About';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="about">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
