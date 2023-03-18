import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Productpage from './Productpage';
import Pageone from './Pageone';


const Tab=createBottomTabNavigator()
 class Tabcomponent extends Component {
  render() {
    return (

        <Tab.Navigator initialRouteName='productpage'>
            <Tab.Screen  name="productpage" component={Productpage}/>
            <Tab.Screen  name="pageone" component={Pageone}/>
            </Tab.Navigator>
        
    )
  }
}

export default Tabcomponent