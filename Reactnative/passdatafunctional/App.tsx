import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Pageone from './component/Pageone';
import Pagetwo from './component/Pagetwo';


const Stack = createNativeStackNavigator();
 const App= ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='pageone'>
      <Stack.Screen name="pageone" component={Pageone}/>
        <Stack.Screen name="pagetwo" component={Pagetwo} />
    

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;