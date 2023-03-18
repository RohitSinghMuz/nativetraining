import React, {Component} from 'react';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
interface IProps {
  props?: any;
  navigation?:any
}
interface IState {
  Email: any;
  Password: any;
  Firstname:any,
  LastName:any,
  signupData:any[],
}
class Signup extends Component<IProps, IState> {
  state = {
    Email: '',
    Password: '',
    Firstname:'',
    LastName:'',
    signupData:[],
  };

  signupdata=async()=>{
    let arr={
      Firstname:this.state.Firstname,
      LastName:this.state.LastName,
      Email:this.state.Email,
      Password:this.state.Password,
    }
    this.setState({signupData:[...this.state.signupData,arr]})


    await AsyncStorage.setItem('signupdata',JSON.stringify(this.state.signupData))
    this.props.navigation.navigate('login')
  }

  // getdata=async()=>{
  //   const getnewdata:any=await AsyncStorage.getItem('signupdata')
  // const mydata= await  getnewdata?JSON.parse(getnewdata):[];
  // console.log(mydata,'mydata')
  //   }
  

  render() {
    return (
      <SafeAreaView style={styles.parentdiv}>
          {/* <TouchableOpacity  onPress={this.getdata}>
              <Text >GETDATA</Text>
            </TouchableOpacity> */}
        <View>
         <Ionicons name="radio-outline" size={30} color="#900" /> 
          <Text style={styles.heading}>Sign up</Text>
          <TextInput
            placeholder="FirstName"
            style={styles.input}
            onChangeText={(textfirstname) => this.setState({Firstname: textfirstname})}
            value={this.state.Firstname}
          />
            <TextInput
            placeholder="LastName"
            style={styles.input}
            onChangeText={(textLastName) => this.setState({LastName: textLastName})}
            value={this.state.LastName}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(emailtext) => this.setState({Email: emailtext})}
            value={this.state.Email}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(passwordtext) =>
              this.setState({Password: passwordtext})
            }
            value={this.state.Password}
          />

          <TouchableOpacity onPress={this.signupdata}>
            <Text style={styles.btnLogin}>Sign up account</Text>
          </TouchableOpacity>
         
        </View>
      </SafeAreaView>
    );
  }
}

export default Signup

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'left',
    marginHorizontal: 35,
  },
  input: {
    height: 48,
    margin: 12,
    padding: 10,
    marginHorizontal: 35,
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  btnLogin: {
    height: 45,
    margin: 12,
    padding: 10,
    marginHorizontal: 35,
    backgroundColor: '#ff7269',
    paddingHorizontal: 20,
    color: 'white',
    fontSize: 16,
    borderRadius: 5,
  },
  parentdiv: {
    backgroundColor: 'white',

  },
  signUpAccount:{
  flexDirection:'row',
  fontSize:18,
  marginHorizontal: 35,

  },
  accounttext:{
    marginRight:6,
    fontSize:18,
    marginVertical:5,
  },
  signUpData:{
    fontSize:18,
    marginVertical:5,
    color:'#372EE5',
  }
});

