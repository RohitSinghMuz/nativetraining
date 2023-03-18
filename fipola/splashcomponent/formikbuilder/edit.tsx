import React from 'react';

// Customizable Area Start
import {
  SafeAreaView,
  Dimensions,
  PixelRatio,
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Switch,
  Platform,
  Image,
  TextInput,
  Picker,
  ActivityIndicator,
  Alert,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StatusBar,
  Modal,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
} from 'react-native-simple-radio-button';
import MergeEngineUtilities from '../../utilities/src/MergeEngineUtilities';
import AntDesign from 'react-native-vector-icons/AntDesign';

//@ts-ignore
import CustomCheckBox from '../../../components/src/CustomCheckBox';

// Merge Engine - import assets - Start
import {
  pathimg,
  flagimg,
  OvalImg,
  avatarimg,
  bottomcircleimg,
  iconsbg,
} from './assets';
// Merge Engine - import assets - End

// Merge Engine - Artboard Dimension  - Start
let artBoardHeightOrg = 667;
let artBoardWidthOrg = 375;
// Merge Engine - Artboard Dimension  - End
// Customizable Area End

import EditProfilesController, {
  Props,
  configJSON,
} from './EditProfilesController';
import {Avatar} from 'react-native-elements';

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Min 3 character is Required')
    .max(20, 'Too Long First Name!')
    .required('First Name is Required'),
  email: Yup.string()
    .email('Invalid EmailId')
    .required(' Email Id is Required'),
  phoneNo: Yup.string().matches(/^[6-9]\d{9}$/, {
    message: 'Please Enter Valid phoneNo.',
    excludeEmptyString: false,
  }),
});

export default class EditProfiles extends EditProfilesController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    Dimensions.addEventListener('change', e => {
      MergeEngineUtilities.init(
        artBoardHeightOrg,
        artBoardWidthOrg,
        Dimensions.get('window').height,
        Dimensions.get('window').width,
      );
      //this.forceUpdate();
    });
    // Customizable Area End
  }

  // Customizable Area Start

  handleSubmit = (values: any) => {
    console.log(values);
  };
  // Customizable Area End

  render() {
    // Customizable Area Start
    // Merge Engine - render - Start
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground
              source={OvalImg}
              resizeMode="cover"
              style={styles.ovalStyle}
            />
            <TouchableOpacity>
              <ImageBackground
                source={iconsbg}
                resizeMode="cover"
                style={styles.iconsBgStyle}>
                <Image source={pathimg} style={styles.pathimgStyle} />
              </ImageBackground>
            </TouchableOpacity>

            <View style={styles.myprofileView}>
              <Text style={styles.myprofiletext}>Edit Profile</Text>
            </View>

            <View style={styles.profilestyle} testID="avatarWrapper">
              <Avatar
                size="large"
                rounded
                source={
                  this.state.profileImage
                    ? {uri: this.state.profileImage}
                    : avatarimg
                }
                showEditButton
                onEditPress={this.renderImagePickerModal}
                editButton={{
                  name: 'pluscircle',
                  type: 'antdesign',
                  color: '#F71C1C',
                  backgroundColor: '#F71C1C',
                  activeOpacity: 0.9,
                  size: 30,
                  // underlayColor: '#000',
                }}
              />
            </View>

            <View>
              <Formik
                testID="formikID"
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  phoneNo: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={this.handleSubmit}>
                {({
                  values,
                  handleChange,
                  handleBlur,
                  errors,
                  handleSubmit,
                  touched,
                }) => (
                  <>
                    <Text style={styles.textlabel}>First Name *</Text>
                    <TextInput
                      testID="firstNameId"
                      style={styles.inputText}
                      placeholder="Wolf shield"
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                      // style={[styles.errorText]}
                      <Text style={styles.validationStyle}>
                        {errors.firstName}
                      </Text>
                    ) : null}
                    <Text style={styles.textlabel}>Last Name </Text>

                    <TextInput
                      testID="lastNameId"
                      style={styles.inputText}
                      placeholder=""
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      value={values.lastName}
                    />
                    <Text style={styles.textlabel}>Email *</Text>

                    <TextInput
                      testID="emailId"
                      style={styles.inputText}
                      placeholder="markh@gmail.com"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    {errors.email && touched.email ? (
                      // style={[styles.errorText]}
                      <Text style={styles.validationStyle}>{errors.email}</Text>
                    ) : null}

                    <Text style={styles.textlabel}>Mobile number *</Text>
                    <View style={styles.numberStyle}>
                      <View style={styles.inputTextLabel}>
                        <Image source={flagimg} style={styles.flagStyle} />
                        <Text style={styles.cCode}>+91</Text>
                      </View>
                      <TextInput
                        testID="phoneId"
                        style={styles.inputnumberStyle}
                        placeholder="9888998899"
                        onChangeText={handleChange('phoneNo')}
                        onBlur={handleBlur('phoneNo')}
                        value={values.phoneNo}
                      />
                    </View>

                    {errors.phoneNo && touched.phoneNo ? (
                      // style={[styles.errorText]}
                      <Text style={styles.validationStyle}>
                        {errors.phoneNo}
                      </Text>
                    ) : null}

                    <View style={styles.checkboxContainer}>
                      <CustomCheckBox
                        testID={'checkboxId'}
                        isChecked={this.state.isSelected}
                        onChangeValue={selected =>
                          this.setState({isSelected: selected})
                        }
                      />
                      <Text>Receive updates and reminders on Whatsapp</Text>
                    </View>

                    <View style={styles.btnView}>
                      <TouchableOpacity
                        onPress={this.handleSubmit}
                        testID="saveData">
                        <Text style={styles.saveBtn}>Save</Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </Formik>
            </View>

            <ImageBackground
              source={bottomcircleimg}
              resizeMode="cover"
              style={styles.bottomcircleImgStyle}
            />

            <Modal
              animationType="slide"
              transparent={true}
              data-testid="ModalID"
              visible={this.state.showPickerModal}
              onRequestClose={() => {
                this.setState({showPickerModal: true});
              }}>
              <View style={styles.modalView}>
                <View style={styles.galleryCameraImg}>
                  <TouchableOpacity
                    onPress={this.onPressCamera}
                    testID="cameraOpen">
                    <Text style={styles.cameraTextDesign}>
                      TAKE PICTURE FROM CAMERA
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={this.onPressPickImage}
                    testID="pickimage">
                    <Text style={styles.cameraTextDesign}>
                      ADD FROM GALLERY
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
    // Merge Engine - render - End
    // Customizable Area End
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  myprofileView: {
    marginVertical: MergeEngineUtilities.deviceBasedDynamicDimension(
      10,
      true,
      1,
    ),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  myprofiletext: {
    marginHorizontal: MergeEngineUtilities.deviceBasedDynamicDimension(
      12,
      true,
      1,
    ),

    fontFamily: 'Poppins',
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(22, true, 1),
    fontWeight: '700',
    color: '#27272A',
  },
  ovalStyle: {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'absolute',
    width: MergeEngineUtilities.deviceBasedDynamicDimension(200, true, 1),
    height: MergeEngineUtilities.deviceBasedDynamicDimension(200, true, 1),
    zIndex: -33333,
  },
  bottomcircleImgStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: MergeEngineUtilities.deviceBasedDynamicDimension(200, true, 1),
    height: MergeEngineUtilities.deviceBasedDynamicDimension(200, true, 1),
    zIndex: -33333,
    right: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
    bottom: MergeEngineUtilities.deviceBasedDynamicDimension(0, true, 1),
  },
  profilestyle: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: MergeEngineUtilities.deviceBasedDynamicDimension(9, true, 1),
  },
  pathimgStyle: {
    alignSelf: 'center',
  },
  iconsBgStyle: {
    margin: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    width: MergeEngineUtilities.deviceBasedDynamicDimension(30, true, 1),
    height: MergeEngineUtilities.deviceBasedDynamicDimension(30, true, 1),
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: MergeEngineUtilities.deviceBasedDynamicDimension(
      20,
      true,
      1,
    ),
    marginVertical: MergeEngineUtilities.deviceBasedDynamicDimension(
      20,
      true,
      1,
    ),
  },
  checkboxContainer: {
    display: 'flex',
    marginHorizontal: MergeEngineUtilities.deviceBasedDynamicDimension(
      10,
      true,
      1,
    ),
    flexDirection: 'row',
    marginBottom: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  checkboxStyle: {
    // alignSelf: 'center',
  },
  label: {
    margin: MergeEngineUtilities.deviceBasedDynamicDimension(8, true, 1),
  },
  inputText: {
    height: MergeEngineUtilities.deviceBasedDynamicDimension(50, true, 1),
    margin: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(1, true, 1),
    borderColor: '#C7CAD9',
    padding: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
  },
  textlabel: {
    fontFamily: 'Poppins',
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    fontWeight: '400',
    lineHeight: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
    textAlign: 'left',
    marginHorizontal: MergeEngineUtilities.deviceBasedDynamicDimension(
      20,
      true,
      1,
    ),
    color: '#1E3354',
  },
  numberStyle: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'flex-start',
  },
  inputTextLabel: {
    display: 'flex',
    flexDirection: 'row',
    height: MergeEngineUtilities.deviceBasedDynamicDimension(50, true, 1),
    marginVertical: MergeEngineUtilities.deviceBasedDynamicDimension(
      15,
      true,
      1,
    ),
    marginLeft: MergeEngineUtilities.deviceBasedDynamicDimension(15, true, 1),
    marginRight: MergeEngineUtilities.deviceBasedDynamicDimension(-12, true, 1),
    borderWidth: MergeEngineUtilities.deviceBasedDynamicDimension(1, true, 1),
    borderColor: '#C7CAD9',
    padding: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    fontFamily: 'Poppins',
  },
  inputnumberStyle: {
    fontFamily: 'Poppins',
    height: MergeEngineUtilities.deviceBasedDynamicDimension(50, true, 1),
    marginVertical: MergeEngineUtilities.deviceBasedDynamicDimension(
      15,
      true,
      1,
    ),
    paddingLeft: MergeEngineUtilities.deviceBasedDynamicDimension(25, true, 1),
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: '#C7CAD9',
    paddingRight: MergeEngineUtilities.deviceBasedDynamicDimension(
      118,
      true,
      1,
    ),
    borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
  },
  flagStyle: {
    marginVertical: MergeEngineUtilities.deviceBasedDynamicDimension(
      5,
      true,
      1,
    ),
    marginRight: MergeEngineUtilities.deviceBasedDynamicDimension(5, true, 1),
    width: MergeEngineUtilities.deviceBasedDynamicDimension(20, true, 1),
    height: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
  },
  cCode: {
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    fontFamily: 'Poppins',
  },
  saveBtn: {
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(18, true, 1),
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#F71C1C',
    padding: MergeEngineUtilities.deviceBasedDynamicDimension(15, true, 1),
    marginHorizontal: MergeEngineUtilities.deviceBasedDynamicDimension(
      30,
      true,
      1,
    ),
    borderRadius: MergeEngineUtilities.deviceBasedDynamicDimension(50, true, 1),
    marginBottom: MergeEngineUtilities.deviceBasedDynamicDimension(50, true, 1),
  },
  btnView: {
    marginTop: 1,
  },
  modalView: {
    backgroundColor: 'grey',
    width: '100%',
    height: MergeEngineUtilities.deviceBasedDynamicDimension(140, true, 1),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  galleryCameraImg: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cameraTextDesign: {
    width: '100%',
    margin: MergeEngineUtilities.deviceBasedDynamicDimension(10, true, 1),
  },
  validationStyle: {
    margin: MergeEngineUtilities.deviceBasedDynamicDimension(2, true, 1),
    marginHorizontal: MergeEngineUtilities.deviceBasedDynamicDimension(
      20,
      true,
      1,
    ),
    fontFamily: 'Poppins',
    fontSize: MergeEngineUtilities.deviceBasedDynamicDimension(16, true, 1),
    color: '#27272A',
  },
});
// Customizable Area End
ß;
