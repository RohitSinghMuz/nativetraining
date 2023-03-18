import {Component, ReactNode} from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './component/Home';
import About from './component/About';
import {NavigationContainer} from '@react-navigation/native';
import Signupform from './component/Login';
import Login from './component/Login';
import Signup from './component/Signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Drawernav from './component/Drawernav';
import Newform from './component/Newform';
import Test from './component/Test';
const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <Test />
      //  <NavigationContainer>
      //   <Stack.Navigator initialRouteName='login'>
      //     <Stack.Screen name="login" component={Login} />
      //     <Stack.Screen name="signup" component={Signup} />
      //     <Stack.Screen name="drawernav" component={Drawernav} />
      //   </Stack.Navigator>
      //   </NavigationContainer>
      //  <Newform/>
    );
  }
}

export default App;
