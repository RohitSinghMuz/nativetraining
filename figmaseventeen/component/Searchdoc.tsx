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
import docimage from '../assests/docimage.png';
//@ts-ignore
import flowericons from '../assests/flowericons.png';
interface IProps {
  navigation?: any;
  props?: any;
}
interface IState {
  username: any;
  password: any;
  data: any[];
}
class Searchdoc extends Component<IProps, IState> {
  render() {
    return (
      <View style={styles.searchdesign}>
        <View style={styles.headerdesign}>
          <Text style={styles.nutriDesign}>Nutri</Text>
          <Text style={styles.izydesign}>izy</Text>
        </View>
        <View style={styles.imagesview}>
          <Image source={docimage} style={styles.imagesstyle} />
        </View>
        <View>
          <Image source={flowericons} style={styles.flowerdesign} />
        </View>

        <View style={styles.textsimple}>
          <Text style={styles.customized}>Simple steps to a</Text>
          <Text style={styles.customized}>healthier , newer you.</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.signupdesigntext}>I am a Nutritionnist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.searchDoctor}>I am Searching for a Doctor</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Searchdoc;

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

  customized: {
    fontSize: 28,
    marginHorizontal: 30,
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

  imagesview: {
    marginVertical: 10,
    width: '100%',
    height: '40%',
  },
  imagesstyle: {
    width: '100%',
    height: '100%',
  },

  flowerdesign: {
    width: 70,
    height: 70,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  signupdesigntext: {
    fontSize: 20,
    color: 'white',
    backgroundColor: '#33a854',
    fontWeight: '700',
    paddingVertical: 16,
    textAlign: 'center',
    borderRadius: 25,
    width: '90%',
    alignSelf: 'center',
  },

  searchDoctor: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    paddingVertical: 14,
    textAlign: 'center',
    borderRadius: 35,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    marginVertical: 20,
  },
  searchdesign: {
    backgroundColor: '#fffffff',
  },
  textsimple: {
    paddingBottom: 25,
  },
});
