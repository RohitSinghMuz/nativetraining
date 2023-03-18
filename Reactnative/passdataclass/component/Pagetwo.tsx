import {FlatList, Image, Text, View} from 'react-native';
import React, {Component} from 'react';
interface IProps {
  navigation?: any;
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
    const objdata = this.props.route.params.state;
    console.log(objdata, 'objdata');
    this.setState({data: objdata});
  }

  render() {
    return (
      <View>
        <Text>Pagetwo</Text>

        <FlatList
          data={this.state.data}
          renderItem={({item}: any) => (
            <View>
              <Text>{item.title}</Text>
              <Image
                style={{width: 300, height: 300,marginHorizontal:40,marginVertical:20}}
                resizeMode="contain"
                source={{uri: item.image}}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

export default Pagetwo;
