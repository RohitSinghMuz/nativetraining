import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { View, Text, TextInput, Button } from 'react-native';

const Newform=()=>{
    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .min(4, 'Minimum 4 character!')
    .max(50, 'Too Long!')
          .required('Name is required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm Password is required'),
      });
      


return(
    <Formik
  initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
  validationSchema={validationSchema}
  onSubmit={(values, actions) => {
    // Submit form data
    console.log(values);
    actions.setSubmitting(false);
  }}
>
  {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
    <View>
      <TextInput
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        placeholder="Name"
      />
      {touched.name && errors.name ? (
        <Text style={{ color: 'red' }}>{errors.name}</Text>
      ) : null}
      <TextInput
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        placeholder="Email"
      />
      {touched.email && errors.email ? (
        <Text style={{ color: 'red' }}>{errors.email}</Text>
      ) : null}
      <TextInput
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
        placeholder="Password"
        secureTextEntry={true}
      />
      {touched.password && errors.password ? (
        <Text style={{ color: 'red' }}>{errors.password}</Text>
      ) : null}
      <TextInput
        onChangeText={handleChange('confirmPassword')}
        onBlur={handleBlur('confirmPassword')}
        value={values.confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      {touched.confirmPassword && errors.confirmPassword ? (
        <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
      ) : null}
      <Button title="Submit" onPress={handleSubmit} disabled={isSubmitting} />
    </View>
  )}
</Formik>

)

}

export default Newform;