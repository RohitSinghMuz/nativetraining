import React, {Component} from 'react';
//@ts-ignore
// import { Icon } from 'react-native-vector-icons/MaterialIcons';
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
  data:any[],
}
class Login extends Component<IProps, IState> {
  state = {
    Email: '',
    Password: '',
    data:[],
  };

  addDataLogin=async()=>{
    this.props.navigation.navigate('tabnavigationdata')
    let arr={
      Email:this.state.Email,
      Password:this.state.Password,
    }
    this.setState({data:[...this.state.data,arr]})


    await AsyncStorage.setItem('logindata',JSON.stringify(this.state.data))

 
  }

  // getdata=async()=>{
  //   const getnewdata:any=await AsyncStorage.getItem('logindata')
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
        {/* <Icon name="home" size={30} color="#900" /> */}
          <Text style={styles.heading}>Log in </Text>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={emailtext => this.setState({Email: emailtext})}
            value={this.state.Email}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={passwordtext =>
              this.setState({Password: passwordtext})
            }
            value={this.state.Password}
          />

          <TouchableOpacity onPress={this.addDataLogin}>
            <Text style={styles.btnLogin}>Login to your account</Text>
          </TouchableOpacity>
          <View style={styles.signUpAccount}>
            <Text style={styles.accounttext}>I don't have account</Text>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("signup")}>
              <Text style={styles.signUpData}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Login;

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
