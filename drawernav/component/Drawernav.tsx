import {Component, ReactNode} from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './Home';

const Drawer = createDrawerNavigator();
class Drawernav extends Component {
  render() {
    return (
     
        <Drawer.Navigator initialRouteName="home">
          <Drawer.Screen name="home" component={Home} />
        </Drawer.Navigator>
     

    
    );
  }
}

export default Drawernav;

