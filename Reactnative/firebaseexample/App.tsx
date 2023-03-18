import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import Authenticated from './android/app/component/Authenticated';
import Authenticate from './android/app/component/Authenticate';


GoogleSignin.configure({
    webClientId: "265243815320-gbcmvclnfd9asgpa5aqdp8svkg82r41u.apps.googleusercontent.com"
});

const App = () => {
    const [authenticated, setAuthenticated] = useState(false);

    auth().onAuthStateChanged((user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    });


    async function handleGoogleButtonPress() {
        try {
            // get the user id token
            const { idToken } = await GoogleSignin.signIn();
            // create a credential using the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // authenticate the user using the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log("error", error);
        }
    }

    if (authenticated) {
        return <Authenticated/>
    }
    return <Authenticate handleGoogleButtonPress={handleGoogleButtonPress} />
};

export default App;