import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
interface IProps {}
interface IState {
  img: any;
  gallery: any;

  data: any[];
}

const optionarray = [
  'Select From File',
  'Captures with camera',
  'Close',
  // 'option4',
];

class Cameraimage extends Component<IProps, IState> {
  actionSheet: any;

  constructor(props: IProps) {
    super(props);
    this.state = {
      img: '',
      data: [],
      gallery: '',
    };
    this.actionSheet = React.createRef();
  }

  showActionSheet = () => {
    this.actionSheet.current.show();
  };

  handlePress = (index: any) => {
    // Alert.alert(optionarray[index]);
    if (index === 0) {
      this.imageGalleryLaunch();
    } else if (index === 1) {
      this.cameraLaunch();
    }
  };

  options: any = {
    saveToPhotos: true,
    mediaType: 'photo',
    allowsMultipleSelection: true,
  };

  imageGalleryLaunch = async () => {
    const result: any = await launchImageLibrary(this.options);
    console.log(result, 'result');
    result && result.assets && result.assets.length > 0 && result.assets[0].uri
      ? this.setState({gallery: result.assets[0].uri}, () => {
          this.setState({data: [...this.state.data, this.state.gallery]});
        })
      : null;
  };

  cameraLaunch = async () => {
    const granted: any = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    console.log(granted, PermissionsAndroid.RESULTS.GRANTED, 'granted');

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const CameraResult: any = await launchCamera(this.options);
      console.log(CameraResult, 'CameraResult');
      CameraResult &&
      CameraResult.assets &&
      CameraResult.assets.length > 0 &&
      CameraResult.assets[0].uri
        ? this.setState({gallery: CameraResult.assets[0].uri}, () => {
            this.setState({data: [...this.state.data, this.state.gallery]});
          })
        : null;
    }
  };

  deletetext = (idx: any) => {
    const deleteitem = this.state.data?.filter((item: any, i: any) => i != idx);
    this.setState({
      data: deleteitem,
    });
  };

  render() {
    console.log(this.state.data, 'data');
    return (
      <SafeAreaView
        style={{
          backgroundColor: '#75E6DA',
          flex: 1,
        }}>
        <ScrollView>
          <View>
            <View style={styles.centeredView}>
              <FlatList
                testID="flatlistitem"
                // numColumns={2}
                contentContainerStyle={{
                  width: 400,
                  height: 300,
                }}
                data={this.state.data}
                keyExtractor={(index: number) => index.toString()}
                renderItem={({item, index}: any) => {
                  return (
                    <View style={styles.Imagedisplay}>
                      <Image
                        key={index}
                        testID="ImagedisplayID"
                        style={{
                          height: 150,
                          width: 150,
                          borderRadius: 10,
                          margin: 10,
                        }}
                        source={{
                          uri: item,
                        }}
                      />
                      <View>
                        <Ionicons
                          testID="deleteImage"
                          onPress={() => this.deletetext(index)}
                          name="ios-close-sharp"
                          size={25}
                          color="red"
                          style={{marginLeft: 70, fontSize: 30}}
                        />
                      </View>
                    </View>
                  );
                }}
              />
            </View>

            <View style={styles.actionbtnfile}>
              <TouchableOpacity
                testID="actionBtnText"
                onPress={this.showActionSheet}>
                <Text style={styles.actionbtn}>Open bottom action</Text>
              </TouchableOpacity>
            </View>
            <View testID="actionSheet">
              <ActionSheet
                ref={this.actionSheet}
                // title={'actionsheetexample'}
                options={optionarray}
                cancelButtonIndex={2}
                onPress={this.handlePress}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Cameraimage;
const styles = StyleSheet.create({
  actionbtnfile: {
    marginTop: 300,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  actionbtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    fontWeight: '700',
    padding: 10,
    borderRadius: 8,
    fontSize: 25,
  },
  Imagedisplay: {
    flex: 1,
    // flexDirection: 'row',

    justifyContent: 'flex-start',
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#75E6DA',
    alignItems: 'center',
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: '#AAE3E2',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    marginVertical: 100,
    backgroundColor: '#A0E7E5',
    height: 60,
  },
  buttonClose: {
    backgroundColor: '#189AB4',
    margin: 20,
  },
  buttonClosen: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: '#0C2D48',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    fontSize: 22,
  },
  textStyleClose: {
    color: '#0C2D48',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontSize: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
