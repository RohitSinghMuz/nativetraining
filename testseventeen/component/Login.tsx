import {Component, ReactNode} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Chip} from 'react-native-paper';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';

//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';

interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  username: any;
  password: any;
  data: any[];
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Too Short!')
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

class Login extends Component<IProps, IState> {
  state = {
    password: '',
    username: '',
    data: [],
  };

  addsignindata = () => {
    let objdata = {
      usename: this.state.username,
      password: this.state.password,
    };
    this.setState({data: [...this.state.data, objdata]});
    this.props.navigation.navigate('signup');
  };

  submittdata = () => {
    this.props.navigation.navigate('signup');
  };
  render() {
    return (
      <View>
        <View style={styles.headerdesign}>
          <Text style={styles.nutriDesign}>Nutri</Text>
          <Text style={styles.izydesign}>izy</Text>
        </View>
        <View style={styles.logincontent}>
          <View style={styles.letssignParent}>
            <View>
              <Text style={styles.signyou}>Let's Sign you in</Text>
              <Text style={styles.youMissed}>you have been Missed!</Text>
            </View>
          </View>

          {/* <View>
            <Formik
              initialValues={{
                username: '',
                password: '',
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
                  <View>
                    <Text style={styles.emaillabel}>Your Email / Username</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputField}
                        value={values.username}
                        placeholder="John"
                        onBlur={handleBlur('username')}
                        onChangeText={handleChange('username')}
                      />

                      {errors.username && touched.username ? (
                        <Text style={{fontSize: 20}}>{errors.username}</Text>
                      ) : null}
                    </View>
                  </View>

                  <View>
                    <Text style={styles.passwordlabel}>Your Password</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.inputField}
                        value={values.password}
                        placeholder="Password"
                        onBlur={handleBlur('password')}
                        onChangeText={handleChange('password')}
                      />

                      {errors.password && touched.password ? (
                        <Text style={{fontSize: 20}}>{errors.password}</Text>
                      ) : null}
                    </View>

                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        flexDirection: 'row',
                      }}>
                      <Text style={styles.forgotPassword}>
                        Forgot Password?
                      </Text>
                    </View>
                 
                  </View>
                </View>
              )}
            </Formik>
          </View> */}

          <View>
            <Text style={styles.emaillabel}>Your Email / Username</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Stuart Reichel"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.username}
                enablesReturnKeyAutomatically
                onChangeText={usernametext =>
                  this.setState({username: usernametext})
                }
              />
            </View>
          </View>
          <View>
            <Text style={styles.passwordlabel}>Your Password</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.password}
                enablesReturnKeyAutomatically
                onChangeText={passwordtext =>
                  this.setState({password: passwordtext})
                }
              />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={this.addsignindata}>
              <Text style={styles.signindesign}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialIconsParent}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('googleauth')}
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
            <Text style={styles.continue}>
              By continuing you agree Nuyrizy's
            </Text>
            <TouchableOpacity>
              <Text style={styles.termservice}>Terms of</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.services}>services & Privacy Policy</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  headerdesign: {
    backgroundColor: '#f6f7fc',
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
