import React, {useState} from 'react';
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

const Signup = (props: any) => {
  const [firstName, setfirstName] = useState<String>('');
  const [lastName, setlastName] = useState<String>('');
  const [email, setemail] = useState<any>('');
  const [password, setpassword] = useState<any>('');
  const [confirmPassword, setconfirmPassword] = useState<any>('');
  const [data, setdata] = useState<any>([]);

  // const adddatasignup = () => {
  //   let arr = {
  //     email,
  //     password,
  //     firstName,
  //     lastName,
  //     confirmPassword,
  //   };
  //   setdata([...data, arr]);
  //   console.log(data, '***********************');
  //   setemail('');
  //   setpassword('');
  // };
  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          confirmPassword: '',
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
              value={values.firstName}
              placeholder="Enter First Name"
              onBlur={handleBlur('firstName')}
              onChangeText={handleChange('firstName')}
            />
            {errors.firstName && touched.firstName ? (
              <Text>{errors.firstName}</Text>
            ) : null}
            <TextInput
              testID="lastname"
              style={styles.input}
              value={values.lastName}
              placeholder="Enter Last Name"
              onBlur={handleBlur('lastName')}
              onChangeText={handleChange('lastName')}
            />
            {errors.lastName && touched.lastName ? (
              <Text>{errors.lastName}</Text>
            ) : null}
            <TextInput
              testID="email"
              value={values.email}
              style={styles.input}
              placeholder="Enter Email"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
            <TextInput
              testID="password"
              value={values.password}
              style={styles.input}
              placeholder="Enter Password"
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password ? (
              <Text>{errors.password}</Text>
            ) : null}
            <TextInput
              testID="confirmPassword"
              value={values.confirmPassword}
              style={styles.input}
              placeholder="Enter confirmPassword"
              onBlur={handleBlur('confirmPassword')}
              onChangeText={handleChange('confirmPassword')}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text>{errors.confirmPassword}</Text>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} testID="submittdata">
              <Text style={styles.submitButtondata}>Submittdata</Text>
            </TouchableOpacity>

            <View style={styles.loginnav}>
              <Text style={{fontSize: 25}}>got To </Text>
              <TouchableOpacity
                testID="addbtn"
                onPress={() => props.navigation.navigate('login')}>
                <Text style={{fontSize: 25, color: 'green'}}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Signup;

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
