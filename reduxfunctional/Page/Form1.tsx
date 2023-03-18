import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {formdata1} from '../redux/actions/formaction';

const Form1 = () => {
  const [email, setemail] = useState<any>('');
  const [password, setpassword] = useState<any>('');
  const [conpassword, setconpassword] = useState<any>('');
  const getdata = useSelector((state: any) => state.formreducer.employeedata);
  const dispatch = useDispatch();

  console.log('getdata', getdata);

  const submittform1data = () => {
    if (email === '') {
      Alert.alert('please fill the form ');
    } else {
      dispatch(formdata1({email, password, conpassword}));
    }
  };

  useEffect(() => {
    // employeedata.email && setemail(employeedata.email);
    // setpassword(employeedata.password);
    // setconpassword(employeedata.conpassword);
  }, []);

  return (
    <>
      <View>
        <View>
          <Text style={styles.header}>Signup Info</Text>

          <TextInput
            style={styles.input}
            placeholder="Email ID"
            onChangeText={setemail}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="PassWord"
            onChangeText={setpassword}
            value={password}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={setconpassword}
            value={conpassword}
          />

          <TouchableOpacity onPress={submittform1data} style={styles.subbtn}>
            <Text style={styles.subtext}>Submittdata</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Form1;

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
