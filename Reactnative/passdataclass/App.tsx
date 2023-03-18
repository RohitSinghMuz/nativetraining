import {Component, ReactNode} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pageone from './component/Pageone';
import Pagetwo from './component/Pagetwo';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="pageone" component={Pageone} />
          <Stack.Screen name="pagetwo" component={Pagetwo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
