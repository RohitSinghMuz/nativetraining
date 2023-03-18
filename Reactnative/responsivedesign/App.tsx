import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './component/Login';
import Signup from './component/Signup';
import Tabnavigationdata from './component/tabnavigation/Tabnavigationdata';

const Stack = createNativeStackNavigator();
// screenOptions={{headerShown:false}}
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
         <Stack.Screen name="login" component={Login} />
         <Stack.Screen name="signup" component={Signup} />

           <Stack.Screen name="tabnavigationdata" component={Tabnavigationdata} /> 
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
