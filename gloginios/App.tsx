import React, {Component, useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const App = () => {
  const [loggedIn, setloggedIn] = useState<any>(false);
  const [userInfo, setuserInfo] = useState<any>([]);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken}: any = await GoogleSignin.signIn();
      setloggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => Alert.alert('Your are signed out!'));
      setloggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onAuthStateChanged = (user: any) => {
    setuserInfo(user);
    console.log(user);
    if (user) setloggedIn(true);
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '689503161894-is8qe5i1m4c6b1cjiho6mhv0jh2i6j5l.apps.googleusercontent.com',
      offlineAccess: true,
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <View
              style={{
                alignSelf: 'center',
                padding: 10,
                margin: 20,
              }}>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={_signIn}
              />
            </View>

            <View>
              {!loggedIn && <Text>You are currently logged logout</Text>}
              {loggedIn && (
                <TouchableOpacity onPress={signOut}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      borderWidth: 1,
                      borderColor: 'grey',
                      width: 100,
                      textAlign: 'center',
                      padding: 10,
                      margin: 20,
                      color: 'white',
                      backgroundColor: 'black',
                      fontWeight: '700',
                    }}>
                    LogOut
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
