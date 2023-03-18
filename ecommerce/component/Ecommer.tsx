import {Component} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from 'react-native-paper';

interface IProps {}
interface IState {
  data: any[];
}

class Ecommerce extends Component<IProps, IState> {
  state = {
    data: [],
  };

  fetchdata = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    const resdata = await response.json();
    this.setState({data: resdata});
    console.log(this.state.data, 'data****************************');
  };
  componentDidMount() {
    this.fetchdata();
  }

  render() {
    return (
      <ScrollView>
        {/* <TouchableOpacity onPress={this.fetchdata}>
          <Text>Getdata</Text>
        </TouchableOpacity> */}

        <FlatList
          data={this.state.data}
          renderItem={({item}: any) => (
            <View style={{padding: 10}}>
              <Card>
                <Card.Content>
                  <Text>{item.title}</Text>
                  <Text>RS: {item.price}</Text>
                </Card.Content>
                <Image
                  source={{uri: item.images[0]}}
                  style={{width: '100%', aspectRatio: 6 / 4}}
                />
                <Card.Actions>
                  <Text>Submitt</Text>
                </Card.Actions>
              </Card>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

export default Ecommerce;
