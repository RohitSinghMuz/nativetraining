import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
interface IProps {
  navigation?: any;
}
interface IState {
  data: any[];
}

class Pageone extends Component<IProps, IState> {
  state = {
    data: [],
  };

  fetchdata = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const objdata = await response.json();
    this.setState({data: objdata});
  };

  componentDidMount(): void {
    this.fetchdata();
  }

  render() {
    return (
      <View>
        <Text>Pageone</Text>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('pagetwo', {state: this.state.data})
          }>
          <Text>Senddata</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Pageone;
