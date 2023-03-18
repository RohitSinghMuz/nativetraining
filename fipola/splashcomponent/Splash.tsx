import React, {Component} from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

class Splash extends Component {
  render() {
    return (
      <SafeAreaView>
        <Image
          source={require('../asset/images/splashimage.png')}
          style={{width: '10%', height: '40%'}}
        />
        <Text>Hello</Text>
      </SafeAreaView>
    );
  }
}

export default Splash;
