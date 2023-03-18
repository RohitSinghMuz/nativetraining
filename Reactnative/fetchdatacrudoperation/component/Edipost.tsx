import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

interface IProps {
  navigation?: any;
}
interface IState {
  name?: any;
  job?: any;
}

class Edipost extends Component<IProps, IState> {
  state = {
    name: '',
    job: '',
  };

  Editdatafetch = async () => {
    console.log(this.state.name, this.state.job);
    try {
      const body = {
        name: this.state.name,
        job: this.state.job,
      };
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const options = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(body),
      };
      const res = await fetch('https://reqres.in/api/users/7', options);
      const resJson = await res.json();
      console.log(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <Text style={styles.fontdecoration}>Edipost</Text>

        <TextInput
          placeholder="Name"
          style={styles.input}
          onChangeText={nameText => this.setState({name: nameText})}
          value={this.state.name}
        />
        <TextInput
          placeholder="Job"
          style={styles.input}
          onChangeText={jobText => this.setState({job: jobText})}
          value={this.state.job}
        />

        <TouchableOpacity
          style={styles.btn}
          // style={{backgroundColor: 'grey'}}
          onPress={this.Editdatafetch}>
          <Text style={styles.text}>EDit Post </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Edipost;

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
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 100,
    textAlign: 'center',
    marginVertical: 30,
  },
  btn2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginHorizontal: 100,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  bgimage: {
    width: '100%',
    height: '100%',
    // zIndex:-3,
  },
  fontdecoration: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical:10,
    fontFamily: 'Cochin',
    color: 'black',
  },
});
