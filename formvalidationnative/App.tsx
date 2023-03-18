import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Formonchange from './formdata/Formonchange';
import Form from './formdata/Form';

class App extends Component {
  render() {
    return (
      <View>
        <Formonchange />

        {/* <Form /> */}
      </View>
    );
  }
}

export default App;
