import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../component/Login';

const Stack = createNativeStackNavigator();
interface IProps{
  navigation?:any
}
interface IState{
  navigation?:any
}
class Loginstack extends Component<IProps,IState> {
  render() {
    return (
      <View>
     

        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} />
        </Stack.Navigator>

         <TouchableOpacity
          // style={{backgroundColor: 'grey'}}
          onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.btn}>Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Loginstack;
const styles = StyleSheet.create({
  LoginHeading: {
    textAlign: 'center',
  },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginHorizontal:20,
    },
    btn: {
      height: 40,
      width:200,
      marginHorizontal:100,
      marginVertical:20,
      borderWidth: 1,
      padding: 10,
      backgroundColor:'green',
      textAlign:'center',
    },
  
  
});
