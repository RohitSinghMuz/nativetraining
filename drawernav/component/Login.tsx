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
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const Login = (props:any) => {
  const [email, setemail] = useState<any>('');
  const [password, setpassword] = useState<any>('');
  const [data, setdata] = useState<any>([]);
  const adddata = () => {
    let arr = {
      email,
      password,
    };
    setdata([...data, arr]);
    console.log(data, '***********************');
    setemail('');
    setpassword('');
    props.navigation.navigate('drawernav')
  };
  return (
    <View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
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
              style={styles.input}
              placeholder="Enter Email"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
            />
            {errors.password && touched.password ? (
              <Text>{errors.password}</Text>
            ) : null}
            <TouchableOpacity onPress={adddata}>
              <Text style={styles.submitButtondata}>Submittdata</Text>
            </TouchableOpacity>

            <View style={styles.signupnav}>
              <Text style={{fontSize:25}}>If not Signup then </Text>
              <TouchableOpacity onPress={() =>props.navigation.navigate('signup')}>
                <Text style={{fontSize:25,color:'green'}}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  signupnav: {
    display: 'flex',
    flexDirection:'row',
    textAlign:'center',
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
