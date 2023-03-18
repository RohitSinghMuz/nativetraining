import {SafeAreaView} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Weightloss from './Weightloss';
import Healthier from './Healthier';
import Login from './Login';
import Signup from './Signup';
import Createaccount from './Createaccount';
import Verifyotp from './Verifyotp';
import Getstarted from './Getstarted';
import Appointmentpage from './Appointmentpage';
import Searchdoc from './Searchdoc';
import {Component, ReactNode} from 'react';
import Googleauth from '../firebase/Googleauth';

const Stack = createNativeStackNavigator();
class Home extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="weightloss"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="weightloss" component={Weightloss} />
        <Stack.Screen name="healthier" component={Healthier} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="createaccount" component={Createaccount} />
        <Stack.Screen name="verifyotp" component={Verifyotp} />
        <Stack.Screen name="getstarted" component={Getstarted} />
        <Stack.Screen name="appointmentpage" component={Appointmentpage} />
        <Stack.Screen name="searchdoc" component={Searchdoc} />
        <Stack.Screen name="googleauth" component={Googleauth} />
        {/* <Login /> */}
      </Stack.Navigator>
    );
  }
}

export default Home;
