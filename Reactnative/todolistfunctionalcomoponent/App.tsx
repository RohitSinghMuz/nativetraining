import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Todolist from './Todolist';
const App = () => {
  return (
    <>
<SafeAreaView style={{height:'100%',width:'100%',backgroundColor:'grey'}}>
      <View  >
        <Text   style={styles.title}>Todo List</Text>
        <Todolist />
      </View>
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
   fontSize:35,
    fontWeight:'bold',
    // textAlign:'center',
  },
});

export default App;
