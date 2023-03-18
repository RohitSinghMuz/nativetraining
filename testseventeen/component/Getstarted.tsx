import {Component, ReactNode} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
//@ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import thumbimage from '../assests/thumb.png';
interface IProps {}
interface IState {
  username: any;
  password: any;
  data: any[];
}
class Getstarted extends Component<IProps, IState> {
  render() {
    return (
      <View>
        <View style={styles.headerdesign}>
          <Text style={styles.nutriDesign}>Nutri</Text>
          <Text style={styles.izydesign}>izy</Text>
        </View>
        <View style={styles.imagesview}>
          <Image source={thumbimage} style={styles.imagesstyle} />
        </View>
        <View style={styles.logincontent}>
          <View style={styles.letssignParent}>
            <View>
              <FontAwesome
                name="check-circle"
                size={55}
                color={'green'}
                style={styles.rightCircle}
              />
              <Text style={styles.signyou}>Congratulations</Text>
              <Text style={styles.youMissed}>
                You have successfully Created a Account!!
              </Text>
            </View>
          </View>

          <View>
            <TouchableOpacity>
              <Text style={styles.signindesign}>Get Started Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Getstarted;

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
    marginHorizontal: 30,
    fontSize: 20,
    color: '#000000',
    paddingTop: 10,
    fontWeight: '400',
  },
  youMissed: {
    fontSize: 30,
    marginHorizontal: 30,
    color: '#2d292a',
    fontWeight: 'bold',
  },

  signindesign: {
    textAlign: 'center',
    backgroundColor: '#33a854',
    marginHorizontal: 30,
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
  imagesview: {
    marginHorizontal: 40,
    marginVertical: 50,
    width: '80%',
    height: '42%',
  },
  imagesstyle: {
    width: '100%',
    height: '100%',
  },
  rightCircle: {
    marginHorizontal: 30,
  },
});
