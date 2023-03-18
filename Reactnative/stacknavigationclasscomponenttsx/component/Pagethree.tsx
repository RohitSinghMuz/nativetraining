import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react';

interface IProp{
    navigation?:any
}
interface IState{

}
 class Pagethree extends Component<IProp,IState> {
  render() {
    return (
      <View>
         <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={() => this.props.navigation.navigate('pagefour')}>
          <Text style={{padding:20}}>Pagethree</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Pagethree;