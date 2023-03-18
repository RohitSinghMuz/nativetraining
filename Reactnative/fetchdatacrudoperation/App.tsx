import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import BottomTab from './component/BottomTab';
import Carouseldata from './component/Carouseldata';
import Getpost from './component/Getpost';
import Login from './component/Login';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="loginstack" screenOptions={{headerShown:false}}>
         <Stack.Screen name="loginstack" component={Login} />

          <Stack.Screen name="bottomtab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
