import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
import Addpost from './Addpost';
import Getpost from './Getpost';
import Edipost from './Edipost';
import Login from './Login';

import  Deletedataeditdata  from './Deletedataeditdata';
interface IProps {
  navigation?: any;
}
const Tab = createBottomTabNavigator();

export class BottomTab extends Component<IProps> {
  render() {
    return (
   <Tab.Navigator
      initialRouteName='getpost'
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'getpost') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'addpost') {
              iconName = focused ? 'ios-add-circle-sharp' : 'ios-add';
            } else if (route.name === 'deletedate') {
              iconName = focused ? 'medkit' : 'medkit';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
      
       {/* <Tab.Screen
          name="Back"
          component={Login}
        />  */}
        <Tab.Screen name="getpost" component={Getpost} />
        <Tab.Screen name="addpost" component={Addpost} />
        <Tab.Screen name="deletedate" component={Deletedataeditdata} />
        <Tab.Screen name="edipost" component={Edipost} />
        
      
        {/* <Tab.Screen name="edipost" component={Edipost} /> */}
    
        
      
      </Tab.Navigator>
  
    );
  }
}

export default BottomTab;
