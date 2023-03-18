import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface IState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  nameError: string;
  emailError: string;
  passwordError: string;
  confirmPasswordError: string;
}

class Formonchange extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  }

  validateName = () => {
    const {name} = this.state;

    if (!name) {
      this.setState({nameError: 'firstName is required'});
    } else if (name.length < 3) {
      this.setState({nameError: 'firstName must be at least 3 characters'});
    } else {
      this.setState({nameError: ''});
    }
  };

  validateEmail = () => {
    const {email} = this.state;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      this.setState({emailError: 'Please enter your email'});
    } else if (!emailRegex.test(email)) {
      this.setState({emailError: 'Please enter a valid email'});
    } else {
      this.setState({emailError: ''});
    }
  };

  validatePassword = () => {
    const {password} = this.state;

    if (!password) {
      this.setState({passwordError: 'Please enter your password'});
    } else if (password.length < 6) {
      this.setState({
        passwordError: 'Password must be at least 6 characters long',
      });
    } else {
      this.setState({passwordError: ''});
    }
  };

  validateConfirmPassword = () => {
    const {confirmPassword, password} = this.state;

    if (!confirmPassword) {
      this.setState({confirmPasswordError: 'Please confirm your password'});
    } else if (confirmPassword !== password) {
      this.setState({confirmPasswordError: 'Passwords do not match'});
    } else {
      this.setState({confirmPasswordError: ''});
    }
  };

  handleSubmit = () => {
    console.log(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.confirmPasswordError,
    );
  };
  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      nameError,
      emailError,
      passwordError,
      confirmPasswordError,
    } = this.state;

    return (
      <View style={styles.formView}>
        <TextInput
          style={styles.inputdata}
          value={this.state.name}
          testID="inputname"
          onChangeText={name => {
            this.setState({name}, () => {
              this.validateName();
            });
          }}
          placeholder="Name"
        />
        <Text style={styles.errrorText}>{nameError}</Text>

        <TextInput
          style={styles.inputdata}
          value={this.state.email}
          testID="inputemail"
          onChangeText={email => {
            this.setState({email}, () => {
              this.validateEmail();
            });
          }}
          placeholder="Email"
        />
        <Text style={styles.errrorText}>{emailError}</Text>
        <TextInput
          style={styles.inputdata}
          value={this.state.password}
          testID="inputpassword"
          onChangeText={password => {
            this.setState({password}, () => {
              this.validatePassword();
            });
          }}
          placeholder="Password"
          secureTextEntry
        />
        <Text style={styles.errrorText}>{passwordError}</Text>
        <TextInput
          testID="inputcpassword"
          style={styles.inputdata}
          value={this.state.confirmPassword}
          onChangeText={confirmPassword => {
            this.setState({confirmPassword}, () => {
              this.validateConfirmPassword();
            });
          }}
          placeholder="Confirm Password"
          secureTextEntry
        />
        <Text style={styles.errrorText}>{confirmPasswordError}</Text>

        <TouchableOpacity onPress={this.handleSubmit} testID="btnsubmitt">
          <Text style={styles.subBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Formonchange;

const styles = StyleSheet.create({
  formView: {},
  inputdata: {
    paddingVertical: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  errrorText: {
    marginHorizontal: 20,
    marginVertical: 2,
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
