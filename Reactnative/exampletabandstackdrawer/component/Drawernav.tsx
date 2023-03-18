import {
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Signup from './Signup';
const Drawer = createDrawerNavigator();

interface IProps {
  navigation?: any;
}
interface IState {}
class Drawernav extends Component<IProps, IState> {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="signup" component={Signup} />
      </Drawer.Navigator>
    );
  }
}

export default Drawernav;

const styles = StyleSheet.create({
  LoginHeading: {
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
  },
  btn: {
    height: 40,
    width: 200,
    marginHorizontal: 100,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'green',
    textAlign: 'center',
  },
});
