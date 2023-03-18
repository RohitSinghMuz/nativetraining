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
import Ionicons from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import thumbimage from '../assests/thumb.png';
interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  username: any;
  password: any;
  data: any[];
}

class Getstarted extends Component<IProps, IState> {
  render() {
    return (
      <View style={styles.Pagecolor}>
        <View style={styles.arrowview}>
          <View>
            <TouchableOpacity
              style={styles.backSymbol}
              onPress={() => this.props.navigation.navigate('verifyotp')}>
              <Ionicons name="arrow-back" size={35} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.headerdesign}>
            <Text style={styles.nutriDesign}>Nutri</Text>
            <Text style={styles.izydesign}>izy</Text>
          </View>
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
                color={'#33a854'}
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
    paddingHorizontal: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  Pagecolor: {
    backgroundColor: '#ffffff',
  },
  headerdesign: {
    // backgroundColor: '#f6f7fc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 20,
    paddingLeft: 30,
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
