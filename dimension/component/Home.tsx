import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//@ts-ignore
import {width, height, totalSize} from 'react-native-dimension';
interface IProps {}
interface IState {
  data: any[];
}
class Home extends Component<IProps, IState> {
  state = {
    data: [],
  };
  getdata = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const resdata = await response.json();
    this.setState({data: resdata});
    console.log(this.state.data, 'data');
  };
  componentDidMount() {
    this.getdata();
  }

  render() {
    return (
      <ScrollView>
        <Text style={{textAlign: 'center', fontFamily: 'majalla'}}>
          Store GGGGlobal
        </Text>
        <FlatList
          data={this.state.data}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({item, index}: any) => (
            <View style={styles.cardimages}>
              <Image source={{uri: item.image}} style={styles.imagestyle} />
              {/* <Text style={styles.categorydesign}>{item.category}</Text> */}
              <Text style={styles.titledesign}>{item.title}</Text>
              <Text style={styles.styleprice}>RS {item.price}</Text>
              <TouchableOpacity>
                <Text style={styles.buybutton}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  imagestyle: {
    backgroundColor: '#73b1b1',
    width: width(80),
    height: height(60),
    alignSelf: 'center',
    margin: 10,
  },
  cardimages: {
    // backgroundColor: '#4d77c3',
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
  },
  titledesign: {
    fontSize: totalSize(2),
    marginTop: 10,
    padding: 10,
    alignSelf: 'center',
  },
  categorydesign: {
    fontSize: totalSize(2),
    paddingBottom: 10,
    alignSelf: 'center',
  },
  styleprice: {
    fontSize: totalSize(2),
    paddingBottom: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buybutton: {
    width: width(80),
    padding: 15,
    alignSelf: 'center',
    backgroundColor: 'purple',
    color: 'white',
    fontSize: totalSize(2),
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
