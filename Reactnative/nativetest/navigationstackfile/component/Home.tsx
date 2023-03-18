import { SafeAreaView, StatusBar, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
interface IProps{
navigation?:any,
}
interface IState{

}
class Home extends Component<IProps,IState> {

    gotoAbout=()=>{
this.props.navigation.navigate('about')
    }
  render() {
    return (
      <SafeAreaView >
        <StatusBar backgroundColor={'red'}/>
        <Text>Home</Text>
        <TouchableOpacity onPress={this.gotoAbout}>

            <Text>Homebtn</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default Home