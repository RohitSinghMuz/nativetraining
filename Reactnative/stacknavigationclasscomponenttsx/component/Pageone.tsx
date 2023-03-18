import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

interface IProp {
  navigation?: any;
}
interface IState {
  data: any;
}

class Pageone extends Component<IProp, IState> {
  state = {
    data: [],
  };

  fetchdata = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const objdata =await  response.json()
      this.setState({data: objdata})
    } catch (error) {
      console.log(error);
    }
  }
 componentDidMount(): void {
  this.fetchdata()
 }

  render() {
  //   console.log(this.props.navigation);
  // console.log(this.state.data,'data')
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('pagetwo', {state: this.state.data})
          }
          style={{backgroundColor: 'grey'}}>
          <Text style={{padding: 20}}>Pageone</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Pageone;
