import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './component/Home';
import Counter from './component/Counter';
import {NavigationContainer} from '@react-navigation/native';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Counter') {
                  iconName = focused ? 'home' : 'home';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Counter" component={Counter} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
