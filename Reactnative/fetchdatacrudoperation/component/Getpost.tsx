import {
  FlatList,
  Image,
  InteractionManager,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const images = [
  'https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-blue-technology-web-banner-image_122453.jpg',
  'https://png.pngtree.com/thumb_back/fh260/background/20201026/pngtree-futuristic-shape-abstract-background-chemistry-technology-concept-for-website-image_438818.jpg',
  'https://png.pngtree.com/thumb_back/fh260/back_pic/03/93/16/9057e520ba9e1a6.jpg',
  'https://i.pinimg.com/564x/89/e1/b7/89e1b7a45d8f06ff3d0371668e25c646.jpg',
];

interface IProps {}
interface IState {
  Gdata: any[];
  currentIndex: any;
}
const Tab = createBottomTabNavigator();
class Getpost extends Component<IProps, IState> {
  state = {
    Gdata: [],
    currentIndex: 0,
  };

  getdata = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const objdata = await response.json();
      this.setState({
        Gdata: objdata.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getdata();
    setInterval(() => {
      if (this.state.currentIndex < 3) {
        this.setState({currentIndex: this.state.currentIndex + 1});
      } else {
        this.setState({currentIndex: 0});
      }
    }, 3000);
  }

  render() {
    console.log(this.state.Gdata, 'Gdata');
    return (
      <View>
        <Text style={styles.fontdecoration}>UserDetails</Text>
        <Image
          source={{uri: images[this.state.currentIndex]}}
          style={{height: '20%', width: '100%'}}
        />

        <FlatList
          data={this.state.Gdata}
          // keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({item}: any) => (
            <View>
              <Image
                style={{height: 100, width: 100}}
                resizeMode="contain"
                source={{uri: item.avatar}}
              />
              <Image source={{uri: `${item.avatar}`}} />
              <View style={styles.cardata}>
                <Text style={styles.fontdecoration}>ID:{item.id}</Text>
                <Text style={styles.fontdecoration}>Email:{item.email}</Text>
                <Text style={styles.fontdecoration}>
                  First Name:{item.first_name}
                </Text>
                <Text style={styles.fontdecoration}>
                  Last Name{item.last_name}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Getpost;

const styles = StyleSheet.create({
  fontdecoration: {
    textAlign: 'center',
    fontSize: 25,
    marginVertical: 10,
    fontFamily: 'Cochin',
    color: 'black',
  },
  cardata: {
    margin: 12,
    borderWidth: 1,
  },
});
