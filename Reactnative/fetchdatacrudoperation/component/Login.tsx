import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface IProps {
  navigation?: any;
}
interface IState {
  email?: any;
  password?: any;
}

class Login extends Component<IProps, IState> {
  state = {
    email: '',
    password: '',
  };

  logindata = async () => {
    // console.log(this.state.email, this.state.password)
    try {
      const body = {
        "email": this.state.email,
        "password": this.state.password,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };
      const res = await fetch('https://reqres.in/api/login', options);
      const resJson = await res.json();
      // console.log(resJson);
      await AsyncStorage.setItem('token', JSON.stringify(resJson.token));

      if (res.status === 200) {
        this.props.navigation.navigate('bottomtab');
        console.log("Staus-------------",res.status)
        if (resJson?.token) {
          console.log(resJson.token);
        }
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  gettokendata = async () => {
    const getnewtoken: any = await AsyncStorage.getItem('token');
    const adata = (await getnewtoken) ? JSON.parse(getnewtoken) : [];
    console.log(adata, 'adata');
  };


  render() {
    return (
      <View  >
        {/* hidden={true}  */}
         <StatusBar  backgroundColor={'red'} />
        
        {/* <ImageBackground style={styles.bgimage} source={{uri:'https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&w=1600'}} /> */}
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={newText => this.setState({email: newText})}
          value={this.state.email}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={passText => this.setState({password: passText})}
          value={this.state.password}
        />

     

        <TouchableOpacity style={styles.btn}
          // style={{backgroundColor: 'grey'}}
          onPress={this.logindata}>
          <Text   style={styles.textdata}>Login </Text>
    
        </TouchableOpacity>
        {/* <TouchableOpacity
          // style={{backgroundColor: 'grey'}}
          onPress={this.gettokendata}>
          <Text style={styles.btn2}>Gettoken</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

// "email": "eve.holt@reqres.in",
// "password": "cityslicka"

export default Login;

const styles = StyleSheet.create({
  LoginHeading: {
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:100,
    textAlign:'center',
    marginVertical:30,
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginHorizontal:100,
    textAlign:'center'
  },
  textdata: {
    textAlign:'center',
    padding:12,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
   borderWidth:2,
   width:200,
   borderColor:'skyblue',
    color: 'black',
  },
  bgimage:{
    width:'100%',
    height:'100%',
    // zIndex:-3,
  }
});
