// import React from 'react';
// import {StyleSheet, Text, View, Image, Button} from 'react-native';
// import auth from '@react-native-firebase/auth';

// const Authenticated = () => {
//   const user = auth().currentUser;
//   const logoutfunction = () => {
//     auth()
//       .signOut()
//       .then(() => console.log('User signed out!'));
//   };
//   return (
//     <View style={styles.screen}>
//       <Text style={styles.title}>You have logged in successfully</Text>
//       {/* <Image source={{ uri: user?.photoURL }} style={styles.image} /> */}
//       <Text style={styles.text}>{user?.displayName}</Text>
//       <Text style={styles.text}>{user?.email}</Text>
//       <View style={{marginTop: 30}}>
//         <Button title="Log out" onPress={logoutfunction} />
//       </View>
//     </View>
//   );
// };
// export default Authenticated;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffc2c2',
//   },
//   title: {
//     fontSize: 25,
//     marginBottom: 30,
//   },
//   image: {
//     height: 150,
//     width: 150,
//     borderRadius: 150,
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 20,
//   },
// });

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

class Authenticated extends Component {
  user = auth().currentUser;
  logoutfunction = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>You have logged in successfully</Text>
        {/* <Image source={{ uri: user?.photoURL }} style={styles.image} /> */}
        <Text style={styles.text}>{this.user?.displayName}</Text>
        <Text style={styles.text}>{this.user?.email}</Text>
        <View style={{marginTop: 30}}>
          <Button title="Log out" onPress={this.logoutfunction} />
        </View>
      </View>
    );
  }
}
export default Authenticated;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc2c2',
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});
