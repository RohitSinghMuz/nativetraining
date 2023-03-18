import React, {Component} from 'react';
import {TextInput, Text, Button, Alert, View, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Minumum four Character required ')
    .max(50, 'Too Long!')
    .required('name is Required'),
  password: Yup.string()
    .min(6, 'Minumum six Character required')
    .max(50, 'Too Long!')
    .required('Password is Required'),
  email: Yup.string().email('Invalid email').required('Email ID is Required'),
});
interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  // name: string;
  // password: any;
  // email: any;
  data: any;
}
class About extends Component<IProps, IState> {
  state = {
    // name: '',
    // password: '',
    // email: '',
    data: [],
  };
  handleSubmit = (values: any) => {
    console.log(values);
    this.props.navigation.navigate('home');
    this.setState({data: values});
    console.log('---------------', this.state.data);
  };

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={this.handleSubmit}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.name}
              style={styles.inputStyle}
              onChangeText={handleChange('name')}
              onBlur={() => setFieldTouched('name')}
              placeholder="Name"
            />
            {touched.name && errors.name && (
              <Text style={styles.errortext}>{errors.name}</Text>
            )}
            <TextInput
              value={values.email}
              style={styles.inputStyle}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <Text style={styles.errortext}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              style={styles.inputStyle}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={styles.errortext}>{errors.password}</Text>
            )}
            <Button
              color="#3740FE"
              title="Submit"
              // disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    );
  }
}

export default About;
const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#4e4e4e',
    padding: 12,
    marginVertical: 10,
  },
  errortext: {
    fontSize: 12,
    color: '#FF0D10',
  },
});
