import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
interface IProps {
  navigation?: any;
}
interface IState {}
class About extends Component<IProps, IState> {
  render() {
    return (
      <SafeAreaView>
        <StatusBar backgroundColor={'green'} />
        <Text>About</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('tabcomponent')}>
          <Text>Gottotabpage</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default About;
