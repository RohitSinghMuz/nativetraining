import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
interface IProps {
  navigate?: any;
  route?: any;
}

interface IState {
  data: any[];
}
class Pagetwo extends Component<IProps, IState> {
  state = {
    data: [],
  };

  componentDidMount(): void {
    const objdata = this.props.route.params.obj;
    console.log(objdata, 'objdata');
    this.setState({data: objdata});
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <FlatList
          data={this.state.data}
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
