import React, {Component, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, 'Minimum 4 character!')
    .max(30, 'Maximum 30 character!')
    .required('firstName is Required'),
  lastName: Yup.string()
    .min(4, 'Minimum 4 character!')
    .max(30, 'Maximum 30 character!')
    .required('lastName is Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

interface IProps {
  navigation?: any;
}
interface IState {
  firstName: string;
  data: any[];
}
class Test extends Component<IProps, IState> {
  state = {
    firstName: '',
    data: [],
  };

  render() {
    return (
      <View>
        <Formik
          initialValues={{
            firstName: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            //  console.log(values);
            // actions.setSubmitting(false);
          }}>
          {({
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            values,
          }) => (
            <View>
              <TextInput
                testID="firstname"
                style={styles.input}
                value={values.this.state.firstName}
                placeholder="Enter First Name"
                onBlur={handleBlur('firstName')}
                onChangeText={handleChange('firstName')}
              />
              {errors.firstName && touched.firstName ? (
                <Text>{errors.firstName}</Text>
              ) : null}

              <TouchableOpacity onPress={handleSubmit} testID="submittdata">
                <Text style={styles.submitButtondata}>Submittdata</Text>
              </TouchableOpacity>

              <View style={styles.loginnav}>
                <Text style={{fontSize: 25}}>got To </Text>
                <TouchableOpacity
                  testID="addbtn"
                  onPress={() => this.props.navigation.navigate('login')}>
                  <Text style={{fontSize: 25, color: 'green'}}> Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default Test;

const styles = StyleSheet.create({
  loginnav: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    margin: 15,
    height: 60,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    fontSize: 25,
    justifyContent: 'center',
    paddingTop: 10,
  },
  container: {
    paddingTop: 23,
    backgroundColor: '#ffffff',
  },
  input: {
    margin: 15,
    marginTop: 20,
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    fontSize: 25,
  },

  submitButtondata: {
    margin: 15,
    height: 60,
    borderColor: '#f2f2f2',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe8279',
    paddingTop: 10,
  },

  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
