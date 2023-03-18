import React, {Component, useRef} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
const App = () => {
  let actionSheet = useRef<any>();
  let optionarray = [
    'opeiont1',
    'opeiont2',
    'opeiont3',
    'opeiont4',
    'opeiont5',
  ];
  const Actionsheet = () => {
    actionSheet.current.show();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titlestyles}>React native actions</Text>

      <TouchableOpacity onPress={Actionsheet}>
        <Text style={styles.actionbtn}> open bottom action</Text>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheet}
        title={'actionsheetexample'}
        options={optionarray}
        cancelButtonIndex={4}
        destructiveButtonIndex={1}
        onPress={(index: any) => {
          Alert.alert(optionarray[index]);
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: 'grey',
    padding: 15,
  },
  titlestyles: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'green',
  },
  actionbtn: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: 'grey',
    padding: 15,
    fontSize: 20,
  },
});
