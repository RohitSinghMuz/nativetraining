import {ImageProps, Text, TouchableOpacity, View} from 'react-native';
import React, { Component, useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';

interface IProps{
navigation?:any,
}
interface IState{
  data:any[],
}

class Pageone extends Component<IProps,IState>{
state={
  data:[]
}


  fetchdata = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const objdata =await  response.json()
      this.setState({data:objdata})
    } catch (error) {
      console.log(error);
    }
  }
componentDidMount(): void {
  this.fetchdata()
}

  render() { 

    return (
      <View>
        <TouchableOpacity
          onPress={() =>this.props.navigation.navigate('pagetwo', {obj:this.state.data})}
          style={{backgroundColor: 'grey'}}>
          <Text style={{padding: 20}}>Pageone</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default Pageone;
