import  React,{Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import SearchPage from './SearchPage';
import Notificationpage from './Notificationpage';
import Starpage from './Starpage';
import Tubpage from './Tubpage';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
  props?: any;
  navigation?: any;
}

const Tab = createBottomTabNavigator();

class Tabnavigationdata extends Component<IProps> {

  render() {
    return (
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={({route}) => ({
          // headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'searchpage') {
              iconName = focused ? 'search-sharp' : 'search-outline';
            } else if (route.name === 'notificationpage') {
              iconName = focused ? 'notifications-sharp' : 'notifications-outline';
            } else if (route.name === 'starpage') {
              iconName = focused ? 'star' : 'star-outline';
            } else if (route.name === 'tubpage') {
              iconName = focused ? 'medkit' : 'medkit';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
        })}>


        <Tab.Screen name='home' component={Home} />
        <Tab.Screen name='searchpage' component={SearchPage} />
        <Tab.Screen name='notificationpage' component={Notificationpage} />
        <Tab.Screen name='starpage' component={Starpage} />
        <Tab.Screen name='tubpage' component={Tubpage} />
      </Tab.Navigator>
    );
  }
}

export default Tabnavigationdata;
