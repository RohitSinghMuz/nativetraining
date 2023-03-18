import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
//@ts-ignore
import AntDesignICons from 'react-native-vector-icons/AntDesign';
const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: 'majalla', fontSize: 30, color: 'red'}}>
        Hello World g
      </Text>
      <AntDesignICons name="stepforward" size={30} color="red" />
    </SafeAreaView>
  );
};
export default App;
