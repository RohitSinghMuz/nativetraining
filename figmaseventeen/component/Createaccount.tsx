import {Component, ReactNode} from 'react';
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
  password: string;
  cPassword: string;
  data: any[];
}
class Createaccount extends Component<IProps, IState> {
  state = {
    password: '',
    cPassword: '',
    data: [],
  };

  addsignindata = () => {
    let objdata = {
      password: this.state.password,
      cPassword: this.state.cPassword,
    };
    this.setState({data: [...this.state.data, objdata]});
    this.props.navigation.navigate('verifyotp');
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
              <Text style={styles.signyou}>Let's Sign you Up </Text>
              <Text style={styles.youMissed}>Get Registered with Us !</Text>
            </View>
          </View>

          <View>
            <Text style={styles.emaillabel}>Enter Your Password</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Weather@32#"
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
            <Text style={styles.passwordlabel}>Re-Enter Your Password</Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputField}
                placeholder="Weather@32#"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                value={this.state.cPassword}
                enablesReturnKeyAutomatically
                onChangeText={cpasswordtext =>
                  this.setState({cPassword: cpasswordtext})
                }
              />
            </View>
          </View>
          <View>
            <TouchableOpacity onPress={this.addsignindata}>
              <Text style={styles.signindesign}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Createaccount;

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
  logincontent: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
});
