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
import appointmentimage from '../assests/appointmentimage.png';
interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  username: any;
  password: any;
  data: any[];
}
class Appointmentpage extends Component<IProps, IState> {
  render() {
    return (
      <View>
        <View style={styles.headerdesign}>
          <Text style={styles.nutriDesign}>Nutri</Text>
          <Text style={styles.izydesign}>izy</Text>
        </View>
        <View style={styles.imagesview}>
          <Image source={appointmentimage} style={styles.imagesstyle} />
        </View>
        <View style={styles.logincontent}>
          <View style={styles.letssignParent}>
            <View>
              <Text style={styles.customized}>
                Book an appointment for an on-line consultation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.skipnextparent}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('searchdoc')}>
            <Text style={styles.skipdesign}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('searchdoc')}>
            <Text style={styles.signindesign}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Appointmentpage;

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

  customized: {
    fontSize: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    color: '#2d292a',
    fontWeight: 'bold',
  },

  signindesign: {
    textAlign: 'center',
    backgroundColor: '#497bea',
    marginHorizontal: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 35,
    fontSize: 20,
    marginTop: 20,
  },

  logincontent: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
  },
  imagesview: {
    marginVertical: 10,
    width: '100%',
    height: '60%',
  },
  imagesstyle: {
    width: '100%',
    height: '100%',
  },
  skipdesign: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
    borderRadius: 35,
    fontSize: 20,
    marginTop: 20,
  },
  skipnextparent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
