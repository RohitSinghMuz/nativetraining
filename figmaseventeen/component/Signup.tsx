import {Component, ReactNode} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Minumum 6 Character required ')
    .max(50, 'Too Long!')
    .required('username is Required'),
  mobNo: Yup.string()
    .min(10, 'Minumum 10 digit required ')
    .max(12, 'maximum 12 Digit')
    .required('MobNo is Required'),
});

interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  name: string;
  mobNo: string;
  data: any[];
}
class Signup extends Component<IProps, IState> {
  state = {
    name: '',
    mobNo: '',
    data: [],
  };
  handleSubmit = (values: any) => {
    console.log(values);
    this.props.navigation.navigate('createaccount');
    this.setState({data: values});
    console.log('---------------', this.state.data);
  };

  addsignindata = () => {
    let objdata = {
      name: this.state.name,
      mobNo: this.state.mobNo,
    };
    this.setState({data: [...this.state.data, objdata]});
    this.props.navigation.navigate('createaccount');
  };
  render() {
    return (
      <View>
        <View style={styles.arrowview}>
          <View>
            <TouchableOpacity
              style={styles.backSymbol}
              onPress={() => this.props.navigation.navigate('loginvalid')}>
              <Ionicons name="arrow-back" size={35} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerdesign}>
            <Text style={styles.nutriDesign}>Nutri</Text>
            <Text style={styles.izydesign}>izy</Text>
          </View>
        </View>
        <View style={styles.logincontent}>
          <View style={styles.letssignParent}>
            <View>
              <Text style={styles.signyou}>Let's Sign you Up </Text>
              <Text style={styles.youMissed}>Get Registered with Us !</Text>
            </View>
          </View>
          <Formik
            initialValues={{
              name: '',
              mobNo: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={this.handleSubmit}>
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              // isValid,
              handleSubmit,
            }) => (
              <View style={styles.formContainer}>
                <View>
                  <Text style={styles.emaillabel}>Your Name</Text>

                  <View style={styles.inputContainer}>
                    <TextInput
                      value={values.name}
                      style={styles.inputField}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                      placeholder="Stuart Reichel"
                    />
                  </View>
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errortext}>{errors.name}</Text>
                )}
                <View>
                  <Text style={styles.passwordlabel}>
                    Enter Your Mobile Number
                  </Text>

                  <View style={styles.inputContainerpassword}>
                    <TextInput
                      value={values.mobNo}
                      style={styles.inputField}
                      onChangeText={handleChange('mobNo')}
                      placeholder="+9719000090"
                      onBlur={() => setFieldTouched('mobNo')}
                    />
                  </View>
                </View>
                {touched.mobNo && errors.mobNo && (
                  <Text style={styles.errortext}>{errors.mobNo}</Text>
                )}

                <View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.signindesign}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    );
  }
}

export default Signup;

const styles = StyleSheet.create({
  backSymbol: {
    marginHorizontal: 20,
    marginTop: 25,
    borderRadius: 5,
    borderWidth: 1,
    padding: 4,
    width: 45,
    height: 45,
    textAlign: 'left',
    borderColor: '#e9eae9',
    backgroundColor: '#ffffff',
    fontWeight: 'bold',
  },
  errortext: {
    fontSize: 20,
    color: '#FF0D10',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  arrowview: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  headerdesign: {
    // backgroundColor: '#f6f7fc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
  },
  inputContainerpassword: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#79c38a',
  },
  nutriDesign: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  izydesign: {
    color: '#47ae62',
    fontSize: 25,
    fontWeight: 'bold',
  },
  letssignParent: {
    backgroundColor: '#ffffff',
  },
  formContainer: {
    padding: 10,
  },

  signyou: {
    marginHorizontal: 20,
    fontSize: 20,
    color: '#000000',
    paddingTop: 10,
    fontWeight: '400',
  },
  youMissed: {
    fontSize: 30,
    marginHorizontal: 20,
    color: '#2d292a',
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#79c38a',
  },
  inputField: {
    padding: 14,
    fontSize: 22,
    width: '90%',
  },
  emaillabel: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: '400',
  },
  passwordlabel: {
    fontSize: 16,
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: '400',
  },
  forgotPassword: {
    marginRight: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  signindesign: {
    textAlign: 'center',
    backgroundColor: '#33a854',
    marginHorizontal: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 15,
    borderRadius: 35,
    fontSize: 20,
    marginTop: 20,
  },
  logincontent: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
});
