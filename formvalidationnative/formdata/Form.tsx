import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
interface IState {
  firstName: string;
  lastName: any;
  email: any;
  password: any;
  confirmpassword: any;
  errors: any;
}
interface IProps {}
class Form extends Component<IProps, IState> {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: '',
    errors: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
  };

  validateForm = () => {
    const {firstName, lastName, email, password, confirmpassword} = this.state;
    let errors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmpassword: '',
    };
    if (!firstName) {
      errors.firstName = 'firstName is required';
    } else if (firstName.length < 3) {
      errors.firstName = 'firstName must be at least 3 characters';
    }
    if (!lastName) {
      errors.lastName = 'Last Name is required';
    } else if (lastName.length < 3) {
      errors.lastName = 'Last Name must be at least 3 characters';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (!confirmpassword) {
      errors.confirmpassword = 'Confirm Password is required';
    } else if (password !== confirmpassword) {
      errors.confirmpassword = 'Confirm Password do not match';
    }
    this.setState({errors});
  };

  handleSubmit = () => {
    this.validateForm();
    const {errors} = this.state;
    if (Object.keys(errors).length === 0) {
      console.log(
        this.state.firstName,
        this.state.lastName,
        this.state.email,
        this.state.password,
        this.state.confirmpassword,
      );
    }
  };
  render() {
    const {firstName, lastName, email, password, confirmpassword, errors} =
      this.state;
    return (
      <SafeAreaView>
        <View style={styles.formView}>
          <TextInput
            style={styles.inputdata}
            onChangeText={value => this.setState({firstName: value})}
            onBlur={this.validateForm}
            value={this.state.firstName}
            placeholder="First Name"
          />
          {errors.firstName && (
            <Text style={styles.errrorText}>{errors.firstName}</Text>
          )}
          <TextInput
            style={styles.inputdata}
            onChangeText={value => this.setState({lastName: value})}
            onBlur={this.validateForm}
            value={this.state.lastName}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <Text style={styles.errrorText}>{errors.lastName}</Text>
          )}
          <TextInput
            style={styles.inputdata}
            onChangeText={value => this.setState({email: value})}
            onBlur={this.validateForm}
            value={this.state.email}
            placeholder="Email"
          />
          {errors.email && (
            <Text style={styles.errrorText}>{errors.email}</Text>
          )}
          <TextInput
            secureTextEntry
            style={styles.inputdata}
            onChangeText={value => this.setState({password: value})}
            onBlur={this.validateForm}
            value={this.state.password}
            placeholder="Password"
          />
          {errors.password && (
            <Text style={styles.errrorText}>{errors.password}</Text>
          )}
          <TextInput
            style={styles.inputdata}
            onChangeText={value => this.setState({confirmpassword: value})}
            onBlur={this.validateForm}
            value={this.state.confirmpassword}
            placeholder="Confirm Password"
            secureTextEntry
          />
          {errors.confirmpassword && (
            <Text style={styles.errrorText}>{errors.confirmpassword}</Text>
          )}

          <TouchableOpacity onPress={this.handleSubmit}>
            <Text style={styles.subBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Form;

const styles = StyleSheet.create({
  formView: {},
  inputdata: {
    paddingVertical: 10,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  errrorText: {
    marginHorizontal: 20,
  },
  subBtn: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 15,
    borderRadius: 20,
    borderColor: '#7EBDA5',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    borderWidth: 1,
    backgroundColor: '#7EBDA5',
  },
});
