import React, {Component} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import About from './component/About';
import Tabcomponent from './component/tabcomponent/Tabcomponent';

const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <>
      
        <NavigationContainer>
          <Stack.Navigator initialRouteName='home'>
            <Stack.Screen name="home" component={Home}  options={{ title: ' data' }} />
            <Stack.Screen name="about" component={About} />
            <Stack.Screen name="tabcomponent" component={Tabcomponent} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
