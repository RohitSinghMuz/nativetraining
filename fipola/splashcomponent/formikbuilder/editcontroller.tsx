import {IBlock} from '../../../framework/src/IBlock';
import {Message} from '../../../framework/src/Message';
import {BlockComponent} from '../../../framework/src/BlockComponent';
import MessageEnum, {
  getName,
} from '../../../framework/src/Messages/MessageEnum';
import {runEngine} from '../../../framework/src/RunEngine';

// Customizable Area Start
import {imgPasswordInVisible, imgPasswordVisible} from './assets';
import ImagePicker from 'react-native-image-crop-picker';
import {Platform, Text} from 'react-native';
// Customizable Area End

export const configJSON = require('./config');

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  // Customizable Area Start
  firstName: string;
  showPickerModal: boolean;
  lastName: string;
  email: any;
  phoneNo: string;
  profileImage: any;
  profileImageData: any;
  isSelected: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class EditProfilesController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      // Customizable Area Start
      // Customizable Area End
    ];

    this.state = {
      txtInputValue: '',
      txtSavedValue: 'A',
      enableField: false,
      // Customizable Area Start
      profileImageData: null,
      showPickerModal: false,
      profileImage: null,
      firstName: '',
      lastName: '',
      email: '',
      phoneNo: '',
      isSelected: false,

      // Customizable Area End
    };
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

    // Customizable Area Start
    // Customizable Area End
  }

  async receive(from: string, message: Message) {
    runEngine.debugLog('Message Recived', message);

    if (message.id === getName(MessageEnum.AccoutLoginSuccess)) {
      let value = message.getData(getName(MessageEnum.AuthTokenDataMessage));

      this.showAlert(
        'Change Value',
        'From: ' + this.state.txtSavedValue + ' To: ' + value,
      );

      this.setState({txtSavedValue: value});
    }

    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  onPressCamera = () => {
    try {
      ImagePicker.openCamera({
        mediaType: 'photo',
        compressImageQuality: 0.3,
        includeBase64: true,
        cropping: true,
      }).then(async image => {
        // const source = {
        //   uri: this.isPlatformAndroid() ? image.path : image.path.replace("file://", ""),
        // };
        this.setState({
          profileImage: image.path,
          showPickerModal: false,
          profileImageData: image,
        });
      });
    } catch (e) {}
  };
  renderImagePickerModal = () => {
    this.setState({showPickerModal: !this.state.showPickerModal});
  };

  onPressPickImage = () => {
    try {
      ImagePicker.openPicker({
        mediaType: 'photo',
        compressImageQuality: 0.3,
        includeBase64: true,
        cropping: true,
      }).then(async image => {
        this.setState({
          profileImage: image.path,
          showPickerModal: false,
          profileImageData: image,
        });
      });
    } catch (e) {}
  };

  // Customizable Area End
}
