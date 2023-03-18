import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';

interface IProp {
  navigation?: any;
  route?: any;
}
interface IState {
  data: any;
}

class Pagetwo extends Component<IProp, IState> {
  state = {
    data: [],
  };

  componentDidMount(): void {
    const objdata = this.props.route.params.state;
    this.setState({data: objdata});
    console.log(objdata);
  }

  render() {

    return (
      <View>
        <TouchableOpacity
          style={{backgroundColor: 'green'}}
          onPress={() => this.props.navigation.navigate('pagethree')}>
          <Text style={{padding: 20}}>Pagetwo</Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.data}
          // keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({item}: any) => (
            <View>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Pagetwo;
