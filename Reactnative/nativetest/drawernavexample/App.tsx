import * as React from 'react';
import { Button, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Home from './component/Home';
import About from './component/About';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

const  App=()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="about" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App