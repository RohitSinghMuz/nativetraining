import React, {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//@ts-ignore
import Feather from 'react-native-vector-icons/Feather';
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';
//@ts-ignore
import image11 from './assetsimage/image11.png';
//@ts-ignore
import touchlogin from './assetsimage/touchlogin.png';
//@ts-ignore
import Subtract from './assetsimage/Subtract.png';

interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  isChecked: boolean;
  inputemail: string;
  inputpassword: string;
  data: any[];
}
class Login extends Component<IProps, IState> {
  state = {
    isChecked: false,
    inputemail: '',
    inputpassword: '',
    data: [],
  };

  handleToggleCheckBox = () => {
    this.setState({isChecked: !this.state.isChecked});
  };

  addLoginData = () => {
    let arr = {
      inputemail: this.state.inputemail,
      inputpassword: this.state.inputpassword,
    };
    this.setState({data: [...this.state.data, arr]});
    console.log(this.state.data);
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <Text style={styles.loginHeading}>Login </Text>
          </View>
          <View>
            <Text style={styles.bysigning}>
              By signing in you are agreeing{' '}
            </Text>
          </View>
          <View style={styles.ourandterm}>
            <Text style={styles.ourtext}>our</Text>
            <Text style={styles.textterm}> Term and Privacy Policy</Text>
          </View>
          <View style={styles.loginsignup}>
            <TouchableOpacity
              testID="loginpage"
              // onPress={() => this.props.navigation.navigate('login')}
            >
              <Text style={styles.logintext}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              testID="registerpage"
              onPress={() => this.props.navigation.navigate('register')}>
              <Text style={styles.signuptext}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.emailinput}>
            <MaterialCommunityIcons
              name="email-outline"
              size={30}
              color="grey"
              style={styles.emailicons}
            />
            <TextInput
              value={this.state.inputemail}
              testID="inputemail"
              style={styles.emailinputstyle}
              placeholder="Email Address"
              placeholderTextColor="gray"
              onChangeText={(emailinput: string) =>
                this.setState({inputemail: emailinput})
              }
            />
          </View>

          <View style={styles.emailinput}>
            <Feather
              name="lock"
              size={30}
              color="grey"
              style={styles.emailicons}
            />
            <TextInput
              value={this.state.inputpassword}
              testID="inputpassword"
              style={styles.emailinputstyle}
              placeholder="Password"
              placeholderTextColor="gray"
              onChangeText={(passwordtext: string) =>
                this.setState({inputpassword: passwordtext})
              }
            />
            <Entypo name="eye" size={30} color="grey" style={styles.eveicons} />
          </View>
          <View style={styles.forgotpasswordview}>
            <View style={styles.checkboxContainer}>
              {/* <CheckBox
                testID="checkboxID"
                style={styles.checkoboxitem}
                value={this.state.isChecked}
                onValueChange={this.handleToggleCheckBox}
              /> */}
              <Text style={styles.label}>Remember Password</Text>
            </View>
            <View>
              <Text style={styles.forgotpasswordtext}>Forgot Password</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              testID="loginID"
              style={styles.logindesign}
              onPress={this.addLoginData}>
              <Text style={styles.logintextdata}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.connectwith}>or connect with</Text>
          </View>
          <View style={styles.socialicons}>
            <Entypo
              name="facebook-with-circle"
              size={30}
              color="grey"
              style={styles.facebookicons}
            />
            <Entypo
              name="instagram-with-circle"
              size={30}
              color="grey"
              style={styles.facebookicons}
            />
            <Entypo
              name="pinterest-with-circle"
              size={30}
              color="grey"
              style={styles.pinteresticons}
            />
            <Entypo
              name="linkedin-with-circle"
              size={30}
              color="grey"
              style={styles.linkedinicons}
            />
          </View>

          <View>
            <Image style={styles.image11} source={image11} />
          </View>

          <View style={styles.halfeclipse}>
            <Image style={styles.subimage} source={Subtract} />
            <Image style={styles.touchlogin} source={touchlogin} />
            <Text style={styles.touchtext}>Login with touch</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  loginHeading: {
    fontFamily: 'majalla',
    marginTop: 40,
    fontSize: 40,
    lineHeight: 56,
    textAlign: 'center',
    color: '#000000',
    fontWeight: '400',
  },
  container: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  bysigning: {
    fontFamily: 'majalla',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#6B5E5E',
    fontStyle: 'normal',
  },
  ourandterm: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textterm: {
    fontFamily: 'majalla',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#0386D0',
  },
  ourtext: {
    fontFamily: 'majalla',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#6B5E5E',
    fontStyle: 'normal',
  },
  loginsignup: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  logintext: {
    fontFamily: 'majalla',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    margin: 10,
    borderBottomWidth: 1.5,
    color: '#0386D0',
  },
  signuptext: {
    fontFamily: 'majalla',
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 35,
    letterSpacing: 0,
    textAlign: 'center',
    margin: 10,
  },
  emailinput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 35,
    borderBottomColor: '#A6A6A6',
    borderBottomWidth: 1.5,
    marginRight: 40,
    marginBottom: 20,
  },
  emailinputstyle: {
    fontFamily: 'majalla',
    fontSize: 22,
    marginLeft: 10,
  },
  emailicons: {
    marginTop: 10,
  },
  eveicons: {
    marginLeft: 120,
    marginTop: 8,
  },
  logintextdata: {
    fontSize: 25,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'majalla',
    lineHeight: 35,
    letterSpacing: 0,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkoboxitem: {
    marginTop: 5,
  },
  checkbox: {
    alignSelf: 'center',
    margin: 18,
  },
  label: {
    margin: 8,
    fontFamily: 'majalla',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'left',
  },
  forgotpasswordview: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 28,
  },
  forgotpasswordtext: {
    fontFamily: 'majalla',
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    color: '#0386D0',
  },
  logindesign: {
    marginHorizontal: 35,
    backgroundColor: '#0386D0',
    padding: 12,
    borderRadius: 5,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
  },
  connectwith: {
    marginHorizontal: 35,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 12,
    margin: 7,
    fontFamily: 'majalla',
  },
  facebookicons: {
    color: '#3B5998',
    fontSize: 45,
    margin: 7,
  },
  pinteresticons: {
    color: '#CB2027',
    fontSize: 45,
    margin: 7,
  },
  linkedinicons: {
    color: '#007AB9',
    fontSize: 45,
    margin: 7,
  },
  socialicons: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image11: {
    height: 100,
    width: '100%',
    objectFit: 'fill',
    zIndex: 2,
  },
  touchlogin: {
    marginTop: -38,
    marginBottom: 15,
    left: '40%',
  },

  halfeclipse: {
    width: '100%',
    height: 330,
    backgroundColor: '#469FD1',
    borderTopRadius: '50%',
    zIndex: 999999999,
  },
  subimage: {
    marginTop: -100,
    width: '100%',
    height: 100,
  },
  touchtext: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 5,
    fontFamily: 'majalla',
    color: '#FFFFFF',
  },
});
