// import React, {useState} from 'react';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import Authenticated from './Authenticated';
// import Authenticate from './Authenticate';
// import Getstarted from '../component/Getstarted';

// GoogleSignin.configure({
//   webClientId:
//     '249036000071-9tldcsq99irlktjl24992ap0bd29lr9o.apps.googleusercontent.com',
// });

// const Glogin = () => {
//   const [authenticated, setAuthenticated] = useState(false);

//   auth().onAuthStateChanged(user => {
//     if (user) {
//       setAuthenticated(true);
//     } else {
//       setAuthenticated(false);
//     }
//   });

//   async function handleGoogleButtonPress() {
//     try {
//       // get the user id token
//       const {idToken} = await GoogleSignin.signIn();
//       // create a credential using the token
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//       // authenticate the user using the credential
//       return auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       console.log('error', error);
//     }
//   }

//   if (authenticated) {
//     return <Getstarted />;
//   }
//   return <Authenticate handleGoogleButtonPress={handleGoogleButtonPress} />;
// };

// export default Glogin;

import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Getstarted from '../component/Getstarted';
import Authenticate from './Authenticate';

GoogleSignin.configure({
  webClientId:
    '249036000071-9tldcsq99irlktjl24992ap0bd29lr9o.apps.googleusercontent.com',
});

interface IProps {
  navigation?: any;
  props?: any;
}

interface IState {
  authenticated: boolean;
}

class Glogin extends Component<IProps, IState> {
  state = {
    authenticated: false,
  };

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({authenticated: true});
      } else {
        this.setState({authenticated: false});
      }
    });
  }

  handleGoogleButtonPress = async () => {
    try {
      // get the user id token
      const {idToken} = await GoogleSignin.signIn();
      // create a credential using the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // authenticate the user using the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    const {authenticated} = this.state;

    if (authenticated) {
      return <Getstarted />;
    }
    return (
      <Authenticate handleGoogleButtonPress={this.handleGoogleButtonPress} />
    );
  }
}

export default Glogin;
