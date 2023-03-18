import {Component, ReactNode} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

class App extends Component {
  render(): ReactNode {
    return (
      <SafeAreaView>
        <StatusBar />
        <View>
          <Text>Hello Woorld</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
