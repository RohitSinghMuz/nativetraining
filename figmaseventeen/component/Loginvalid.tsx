import React, {Component} from 'react';
import {
  TextInput,
  Text,
  Button,
  Alert,
  View,
  StyleSheet,
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
  username: Yup.string()
    .min(2, 'Minumum 6 Character required ')
    .max(50, 'Too Long!')
    .required('username is Required'),
  password: Yup.string()
    .min(2, 'Minumum 6 Character required')
    .max(50, 'Too Long!')
    .required('Password is Required'),
});
interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  username: string;
  password: string;
  data: any[];
  isPasswordVisible: boolean;
}
class Loginvalid extends Component<IProps, IState> {
  state = {
    username: '',
    password: '',
    isPasswordVisible: false,
    data: [],
  };
  handleSubmit = (values: any) => {
    console.log(values);
    this.props.navigation.navigate('signup');
    this.setState({data: values});
    console.log('---------------', this.state.data);
  };
  handleShowPassword = () => {
    this.setState({isPasswordVisible: !this.state.isPasswordVisible});
  };

  render() {
    return (
      <View>
        <View style={styles.arrowview}>
          <View>
            <TouchableOpacity
              style={styles.backSymbol}
              onPress={() => this.props.navigation.navigate('searchdoc')}>
              <Ionicons name="arrow-back" size={35} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerdesign}>
            <Text style={styles.nutriDesign}>Nutri</Text>
            <Text style={styles.izydesign}>izy</Text>
          </View>
        </View>
        <View>
          <Text style={styles.signyou}>Let's Sign you in</Text>
          <Text style={styles.youMissed}>you have been Missed!</Text>
        </View>

        <Formik
          initialValues={{
            username: '',
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
            // isValid,
            handleSubmit,
          }) => (
            <View style={styles.formContainer}>
              <View>
                <Text style={styles.emaillabel}>Your Email / Username</Text>

                <View style={styles.inputContainer}>
                  <TextInput
                    value={values.username}
                    style={styles.inputField}
                    onChangeText={handleChange('username')}
                    onBlur={() => setFieldTouched('username')}
                    placeholder="Stuart Reichel"
                  />
                </View>
              </View>
              {touched.username && errors.username && (
                <Text style={styles.errortext}>{errors.username}</Text>
              )}
              <View>
                <Text style={styles.passwordlabel}>Your Password</Text>

                <View style={styles.inputContainerpassword}>
                  <TextInput
                    secureTextEntry={!this.state.isPasswordVisible}
                    value={values.password}
                    style={styles.inputField}
                    onChangeText={handleChange('password')}
                    placeholder="Password"
                    onBlur={() => setFieldTouched('password')}
                  />
                  <TouchableOpacity
                    onPress={this.handleShowPassword}
                    style={styles.showhideicons}>
                    <Text>
                      <Ionicons
                        name={this.state.isPasswordVisible ? 'eye-off' : 'eye'}
                        size={24}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errortext}>{errors.password}</Text>
              )}
              <View style={styles.forgotPassParent}>
                <Text style={styles.forgotPassword}>Forgot Password ?</Text>
              </View>
              <View>
                <TouchableOpacity onPress={handleSubmit}>
                  <Text style={styles.signindesign}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.socialIconsParent}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('glogin')}
            style={styles.iconsdesign}>
            <Text style={{textAlign: 'center'}}>
              <AntDesign name="google" color={'red'} size={25} />
            </Text>
          </TouchableOpacity>
          <Text style={styles.iconsdesign}>
            <Entypo name="facebook-with-circle" color={'#5281eb'} size={25} />
          </Text>
        </View>

        <View style={styles.signupdesignView}>
          <Text style={styles.dontAccounttext}>Don't have a Account?</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.signupdesigntext}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.termandcondition}>
          <Text style={styles.continue}>By continuing you agree Nuyrizy's</Text>
          <TouchableOpacity>
            <Text style={styles.termservice}>Terms of</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.services}>services & Privacy Policy</Text>
        </View>
      </View>
    );
  }
}

export default Loginvalid;
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
  formContainer: {
    padding: 10,
  },
  errortext: {
    fontSize: 20,
    color: '#FF0D10',
    paddingHorizontal: 20,
    paddingVertical: 5,
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
    width: '90%',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#79c38a',
  },
  inputContainerpassword: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderColor: '#79c38a',
  },
  showhideicons: {
    marginTop: 15,
  },
  inputField: {
    padding: 14,
    fontSize: 25,
    fontWeight: '500',
    width: '90%',
    color: 'black',
  },
  emaillabel: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: '500',
  },
  passwordlabel: {
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20,
    fontWeight: '500',
  },
  forgotPassword: {
    marginRight: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  forgotPassParent: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
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
  socialIconsParent: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  iconsdesign: {
    width: '48%',
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey',
    borderRadius: 28,
    textAlign: 'center',
  },
  iconsshowhide: {
    padding: 10,
    borderColor: 'grey',
    borderRadius: 28,
    textAlign: 'right',
    marginTop: -20,
  },
  signupdesignView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 40,
    paddingTop: 10,
    paddingBottom: 40,
  },
  dontAccounttext: {
    fontSize: 20,
    fontWeight: '500',
    color: '#616267',
  },
  signupdesigntext: {
    fontSize: 20,
    marginLeft: 4,
    color: 'black',
    fontWeight: '700',
  },

  termandcondition: {
    marginHorizontal: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#616267',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  continue: {
    fontSize: 18,
  },
  termservice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  services: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 6,
    fontSize: 18,
  },
  logincontent: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
});
