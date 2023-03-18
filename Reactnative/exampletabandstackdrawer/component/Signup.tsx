import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './Login';
interface IProps {
  navigation?: any;
}
interface IState {
  firstName?: any;
  lastName?: any;
  Email?: any;
  Password?: any;
  Cpassword?: any;
}
const Drawer = createDrawerNavigator();
class Signup extends Component<IProps, IState> {
  state = {
    firstName: '',
    lastName: '',
    Email: '',
    Password: '',
    Cpassword: '',
  };

  render() {
    return (
      <View>
      

        <TextInput
          placeholder="firstName"
          style={styles.input}
          onChangeText={fistnameText =>
            this.setState({firstName: fistnameText})
          }
          value={this.state.firstName}
        />
        <TextInput
          placeholder="lastName"
          style={styles.input}
          onChangeText={lnameText => this.setState({lastName: lnameText})}
          value={this.state.lastName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={EmailText => this.setState({Email: EmailText})}
          value={this.state.Email}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={PasswordText => this.setState({Password: PasswordText})}
          value={this.state.Password}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          onChangeText={CPasswordText =>
            this.setState({Cpassword: CPasswordText})
          }
          value={this.state.Cpassword}
        />

        <TouchableOpacity
          // style={{backgroundColor: 'grey'}}

          onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.btn}>Signup Page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Signup;

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
