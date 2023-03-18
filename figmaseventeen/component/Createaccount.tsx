import {Component, ReactNode} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';

import * as Yup from 'yup';
import {Formik} from 'formik';

const CreateSchema = Yup.object().shape({
  Password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  cPassword: Yup.string()
    .oneOf([Yup.ref('Password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  Password: string;
  cPassword: string;
  data: any[];
  isPasswordVisible: boolean;
  isConPasswordVisible: boolean;
}
class Createaccount extends Component<IProps, IState> {
  state = {
    Password: '',
    cPassword: '',
    isPasswordVisible: false,
    isConPasswordVisible: false,
    data: [],
  };
  handleSubmit = (values: any) => {
    console.log(values);
    this.props.navigation.navigate('verifyotp');
    this.setState({data: values});
    console.log('---------------', this.state.data);
  };

  // addsignindata = () => {
  //   let objdata = {
  //     password: this.state.Password,
  //     cPassword: this.state.cPassword,
  //   };
  //   this.setState({data: [...this.state.data, objdata]});
  //   this.props.navigation.navigate('verifyotp');
  // };
  handleShowPassword = () => {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible});
  };
  handleShowConPassword = () => {
    this.setState({isConPasswordVisible: !this.state.isConPasswordVisible});
  };
  render() {
    return (
      <View>
        <View style={styles.arrowview}>
          <View>
            <TouchableOpacity
              style={styles.backSymbol}
              onPress={() => this.props.navigation.navigate('signup')}>
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
              Password: '',
              cPassword: '',
            }}
            validationSchema={CreateSchema}
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
                  <Text style={styles.emaillabel}>Enter Your Password</Text>

                  <View style={styles.inputContainerpassword}>
                    <TextInput
                      //  secureTextEntry={!this.state.isPasswordVisible}
                      style={styles.inputField}
                      placeholder="Weather@32#"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={() => setFieldTouched('Password')}
                      value={values.Password}
                      enablesReturnKeyAutomatically
                      onChangeText={handleChange('Password')}
                    />
                    <TouchableOpacity
                      onPress={this.handleShowPassword}
                      style={styles.showhideicons}>
                      <Text>
                        <Ionicons
                          name={
                            this.state.isPasswordVisible ? 'eye-off' : 'eye'
                          }
                          size={24}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {touched.Password && errors.Password && (
                    <Text style={styles.errortext}>{errors.Password}</Text>
                  )}
                </View>

                <View>
                  <Text style={styles.passwordlabel}>
                    Re-Enter Your Password
                  </Text>

                  <View style={styles.inputContainerpassword}>
                    <TextInput
                      secureTextEntry={!this.state.isConPasswordVisible}
                      style={styles.inputField}
                      placeholder="Weather@32#"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onBlur={() => setFieldTouched('cPassword')}
                      value={values.cPassword}
                      enablesReturnKeyAutomatically
                      onChangeText={handleChange('cPassword')}
                    />
                    <TouchableOpacity
                      onPress={this.handleShowConPassword}
                      style={styles.showhideicons}>
                      <Text>
                        <Ionicons
                          name={
                            this.state.isConPasswordVisible ? 'eye-off' : 'eye'
                          }
                          size={24}
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {touched.cPassword && errors.cPassword && (
                  <Text style={styles.errortext}>{errors.cPassword}</Text>
                )}

                <View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.signindesign}>Create Account</Text>
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

export default Createaccount;

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
  arrowview: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#79c38a',
  },
  headerdesign: {
    // backgroundColor: '#f6f7fc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
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
  errortext: {
    fontSize: 20,
    color: '#FF0D10',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  youMissed: {
    fontSize: 30,
    marginHorizontal: 20,
    color: '#2d292a',
    fontWeight: 'bold',
  },
  inputContainerpassword: {
    display: 'flex',
    flexDirection: 'row',
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
  showhideicons: {
    marginTop: 15,
  },
});
