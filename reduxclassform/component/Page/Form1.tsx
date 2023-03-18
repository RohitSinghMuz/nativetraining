import React, {Component, useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {formdata1} from '../../redux/actions/formaction';
interface IProps {
  dispatch?: any;
  data?: any;
}
interface IState {
  email: any;
  password: any;
  conpassword: any;
}
class Form1 extends Component<IProps, IState> {
  state = {
    email: '',
    password: '',
    conpassword: '',
  };

  submittform1data = () => {
    if (this.state.email === '') {
      Alert.alert('please fill the form ');
    } else {
      return this.props.dispatch(
        formdata1({
          email: this.state.email,
          password: this.state.password,
          conpassword: this.state.conpassword,
        }),
      );
    }
  };
  componentDidMount() {
    console.log(this.props.data, 'getdata');
  }

  render() {
    console.log(this.props.data, 'getdata');
    return (
      <>
        <View>
          <View>
            <Text style={styles.header}>Signup Info</Text>

            <TextInput
              style={styles.input}
              placeholder="Email ID"
              onChangeText={(emailtext: any) =>
                this.setState({email: emailtext})
              }
              value={this.state.email}
            />

            <TextInput
              style={styles.input}
              placeholder="PassWord"
              value={this.state.password}
              onChangeText={(passwordtext: any) =>
                this.setState({password: passwordtext})
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={this.state.conpassword}
              onChangeText={(conpasswordtext: any) =>
                this.setState({conpassword: conpasswordtext})
              }
            />

            <TouchableOpacity
              onPress={this.submittform1data}
              style={styles.subbtn}>
              <Text style={styles.subtext}>Submittdata</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const MapStatetoprops = (state: any) => ({
  data: state.formreducer.employeedata,
});
const MapDIspatchtoProps = (dispatch: any) => ({dispatch});

export default connect(MapStatetoprops, MapDIspatchtoProps)(Form1);

const styles = StyleSheet.create({
  input: {
    height: 60,
    margin: 15,
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 22,
    padding: 15,
  },
  subbtn: {
    padding: 10,
    height: 60,
    backgroundColor: '#4630eb',
    marginHorizontal: 15,
    borderRadius: 15,
  },
  subtext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    padding: 2,
  },
});
