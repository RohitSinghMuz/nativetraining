import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import Home from './component/Home';
import Loadscreen from './component/Loadscreen';
import Login from './component/Login';

interface IProps {}
interface IState {
  loading: boolean;
}
const Stack = createNativeStackNavigator();
class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const loader = setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="loadscreen"
          screenOptions={{
            headerShown: false,
          }}>
          {this.state.loading ? (
            <Stack.Screen name="loadscreen" component={Loadscreen} />
          ) : (
            <Stack.Screen name="home" component={Home} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
