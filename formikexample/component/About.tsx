// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Component} from 'react';
// import {Formik} from 'formik';
// import {Button, View, TextInput, Text} from 'react-native';

// interface IProps {
//   navigation?: any;
// }
// interface IState {
//   firstname: '';
//   lastname: '';
// }
// class About extends Component<IProps, IState> {
//   handleSubmit = (values: any) => {
//     this.props.navigation.navigate('home');
//     console.log(values, '_____________');
//   };

//   render() {
//     return (
//       <Formik
//         initialValues={{firstname: '', lastname: ''}}
//         onSubmit={this.handleSubmit}>
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           values,
//           errors,
//           touched,
//         }) => (
//           <View>
//             <TextInput
//               placeholder="Enter firstname"
//               onChangeText={handleChange('firstname')}
//               onBlur={handleBlur('firstname')}
//               value={values.firstname}
//             />
//             {errors.firstname && touched.firstname ? (
//               <Text>{errors.firstname}</Text>
//             ) : null}
//             <TextInput
//               placeholder="Enter lastname"
//               onChangeText={handleChange('lastname')}
//               onBlur={handleBlur('lastname')}
//               value={values.lastname}
//             />
//             {errors.lastname && touched.lastname ? (
//               <Text>{errors.lastname}</Text>
//             ) : null}
//             <Button title="Submit" onPress={handleSubmit} />
//           </View>
//         )}
//       </Formik>
//     );
//   }
// }
// export default About;

import {Component} from 'react';
import {Text, View} from 'react-native';

class About extends Component {
  rendder() {
    return (
      <View>
        <Text>About pgae</Text>
        <Text>About hii</Text>
      </View>
    );
  }
}

export default About;
