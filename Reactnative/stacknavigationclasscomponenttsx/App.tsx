import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pagetwo from './component/Pagetwo';
import Pageone from './component/Pageone';
import Pagefour from './component/Pagefour';
import Pagethree from './component/Pagethree';

const Stack = createNativeStackNavigator();
 const App= ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='pageone'>
      <Stack.Screen name="pageone" component={Pageone}/>
        <Stack.Screen name="pagetwo" component={Pagetwo} />
        <Stack.Screen name="pagethree" component={Pagethree} />
        <Stack.Screen name="pagefour" component={Pagefour} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;