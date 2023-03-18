import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Drawernav from './component/Drawernav';
import Login from './component/Login';
import Signup from './component/Signup';
const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name="login" component={Login} />
         <Stack.Screen name="signup" component={Signup} /> 
          <Stack.Screen name="drawernav" component={Drawernav} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
