import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Left from 'react-native-vector-icons/AntDesign';
import Right from 'react-native-vector-icons/AntDesign';

interface IProps {
  navigation?: any;
}
interface IState {
  name?: any;
  job?: any;
 
}

class Addpost extends Component<IProps, IState> {
  state = {
    name: '',
    job: '',
   
  };

  addpostdata = async () => {
    try {
      const body = {
        name: this.state.name,
        job: this.state.job,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      };
      const res = await fetch('https://reqres.in/api/users', options);
      const resJson = await res.json();
      console.log(resJson);
    
    } catch (error) {
      console.log(error);
    }
  };




  render() {
    return (
      <View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
         
        
        </View>

        <View>
      
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={nametext => this.setState({name: nametext})}
            value={this.state.name}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={jobtext => this.setState({job: jobtext})}
            value={this.state.job}
          />

        

          <TouchableOpacity
            // style={{backgroundColor: 'grey'}}
            onPress={this.addpostdata}>
            <Text style={styles.btn}>Addpost </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Addpost;

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
    height: 40,
    width: 200,
    marginHorizontal: 100,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'green',
    textAlign: 'center',
  },
});
 // currentIndex: 0,