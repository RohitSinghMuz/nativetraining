import React, {Component} from 'react';
import {Image} from 'react-native';

//@ts-ignore
import splashimage from '../assests/splashimage.png';
class Loadscreen extends Component {
  render() {
    return (
      <Image style={{width: '100%', height: '100%'}} source={splashimage} />
    );
  }
}

export default Loadscreen;
