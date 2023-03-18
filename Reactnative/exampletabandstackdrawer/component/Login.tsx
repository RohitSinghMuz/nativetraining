import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

interface IProps {
  navigation?: any;
}
interface IState {
  username?:any,
  password?:any,
}

class Login extends Component<IProps, IState> {
  state={
    username:'',
    password:'',
  }
  render() {
    return (
      <View>

        <TextInput  placeholder='UserName' 
          style={styles.input}
           onChangeText={(newText)=>this.setState({username:newText})}
           value={this.state.username}
        />
        <TextInput  placeholder='Password'
             style={styles.input}
            onChangeText={(passText)=>this.setState({password:passText})}
            value={this.state.password}
        />


        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('drawernav')}>
          <Text style={styles.btn}>Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

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
