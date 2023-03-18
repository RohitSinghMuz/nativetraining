import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  PermissionsAndroid,
  TouchableOpacity,
  Image,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
interface IProps {}
interface IState {
  img: any;
  gallery: any;
  modalVisible: boolean;
}
class Test extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      img: '',
      gallery: '',
      modalVisible: false,
    };
  }
  options: any = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  imageGalleryLaunch = async () => {
    const result = await launchImageLibrary(this.options);
    //@ts-ignore
    result.assets[0].uri
      ? //@ts-ignore
        this.setState({gallery: result.assets[0].uri})
      : null;
    this.setState({modalVisible: !this.state.modalVisible});
  };

  cameraLaunch = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(this.options);
      //@ts-ignore
      result.assets[0].uri
        ? //@ts-ignore
          this.setState({gallery: result.assets[0].uri})
        : null;
      this.setState({modalVisible: !this.state.modalVisible});
    }
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setState({modalVisible: !modalVisible});
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: 'row-reverse',
                  margin: 30,
                }}>
                <TouchableOpacity
                  onPress={() => this.imageGalleryLaunch()}
                  style={[styles.button, styles.buttonClose]}>
                  <Text style={styles.textStyle}>Select File</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.cameraLaunch()}
                  style={[styles.button, styles.buttonClose]}>
                  <Text style={styles.textStyle}>Camera </Text>
                </TouchableOpacity>
              </View>
              <Pressable
                style={[styles.button, styles.buttonClosen]}
                onPress={() => this.setState({modalVisible: !modalVisible})}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Image
          source={{
            uri: this.state.gallery ? this.state.gallery : null,
          }}
          style={{height: 400, width: 300, borderRadius: 20, margin: 30}}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => this.setState({modalVisible: true})}>
            <Text style={styles.textStyle}>Open Gallery or Camera</Text>
          </TouchableOpacity>
          {this.state.gallery ? (
            <TouchableOpacity
              style={[styles.button, styles.buttonOpen]}
              onPress={() => this.setState({gallery: ''})}>
              <Text style={styles.textStyle}>Remove Image</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

export default Test;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00425A',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#645CBB',
    margin: 20,
  },
  buttonClosen: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
