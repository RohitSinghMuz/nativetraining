import React, {Component} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Ecommerce from './component/Ecommer';

class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <StatusBar translucent barStyle={'light-content'} backgroundColor="green"/>
       
        <Ecommerce />
      </SafeAreaView>
    );
  }
}
export default App;
