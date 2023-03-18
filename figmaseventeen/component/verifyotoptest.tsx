import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
const Verifyotp = (props: any) => {
  const [otp, setOTP] = useState<any>('');
  const inputRef1 = useRef<any>(null);
  const inputRef2 = useRef<any>(null);
  const inputRef3 = useRef<any>(null);
  const inputRef4 = useRef<any>(null);
  const navigation: any = useNavigation();
  const verifydata = () => {
    props.navigation.navigate('getstarted');
  };

  const handleInputChange = (index: any, value: any) => {
    setOTP((prev: any) => {
      const newState = prev.split('');
      newState[index] = value;
      return newState.join('');
    });

    if (value && index < 3) {
      switch (index) {
        case 0:
          inputRef2.current.focus();
          break;
        case 1:
          inputRef3.current.focus();
          break;
        case 2:
          inputRef4.current.focus();
          break;
        default:
          break;
      }
    }
  };

  return (
    <View>
      <View style={styles.arrowview}>
        <View>
          <TouchableOpacity
            style={styles.backSymbol}
            onPress={() => props.navigation.navigate('createaccount')}>
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
            <Text style={styles.signyou}>OTP Verification </Text>
            <Text style={styles.youMissed}>Please Enter Verification Code</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <TextInput
          ref={inputRef1}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={text => handleInputChange(0, text)}
          value={otp[0]}
        />
        <TextInput
          ref={inputRef2}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={text => handleInputChange(1, text)}
          value={otp[1]}
        />
        <TextInput
          ref={inputRef3}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={text => handleInputChange(2, text)}
          value={otp[2]}
        />
        <TextInput
          ref={inputRef4}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={text => handleInputChange(3, text)}
          value={otp[3]}
        />
      </View>

      <View>
        <TouchableOpacity onPress={verifydata}>
          <Text style={styles.signindesign}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Verifyotp;

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
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '15%',
    height: 50,
    marginHorizontal: 20,
    fontSize: 24,
    textAlign: 'center',
  },

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
    marginRight: 40,
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
