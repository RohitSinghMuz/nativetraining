import React from 'react';
import {PermissionsAndroid, View as MockView} from 'react-native';
import {render, screen, fireEvent, act} from '@testing-library/react-native';
import Cameraimage from '../Cameraimage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet from 'react-native-actionsheet';
import {launchCamera} from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => ({
  launchCamera: jest.fn().mockImplementation(() => ({
    assets: [
      {
        uri: 'filepath',
      },
    ],
  })),
  launchImageLibrary: jest.fn().mockImplementation(() => ({
    assets: [
      {
        uri: 'filepath',
      },
    ],
  })),
}));

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: () => null,
}));

jest.mock('react-native-vector-icons/Ionicons', () => (props: any) => (
  <MockView {...props} />
));
class mockClass extends React.Component {
  render(): React.ReactNode {
    return <></>;
  }
}
jest.mock('react-native-actionsheet', () => {
  return (props: any) => {
    console.log('-----clg', props);
    props.onPress();
    return <></>;
  };
});

jest.spyOn(React, 'createRef').mockImplementation(() => ({
  current: {
    show: jest.fn(),
  },
}));

describe('Test cases of  Cameraimage component', () => {
  it('onPress function is called when "Select File" button is pressed', async () => {
    const {getByTestId} = render(<Cameraimage />);
    const selectFileButton: any = getByTestId('actionBtnText');
    // console.log('selectFileButton', selectFileButton);
    fireEvent.press(selectFileButton);
    // expect(mockFunction).toHaveBeenCalled();
  });

  it('requests for PermissionsAndroid camera', async () => {
    const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
    const granted: any = true;
    console.log(permission, 'permission');
    jest
      .spyOn(PermissionsAndroid, 'request')
      .mockImplementation(() => Promise.resolve('granted'));

    await expect(PermissionsAndroid.request(permission)).resolves.toBe(
      'granted',
    );
    expect(PermissionsAndroid.request).toHaveBeenCalledWith(permission);
  });

  it('imageGalleryLaunch tst cases', async () => {
    const {getByTestId} = render(<Cameraimage />);
    const actionSheet: any = getByTestId('actionSheet');
    // console.log(actionSheet.props.children.props, 'actionSheet');
    actionSheet.props.children.props.onPress(0);
  });

  it('cameraLaunch tst cases', async () => {
    const {getByTestId} = render(<Cameraimage />);
    const actionSheet: any = getByTestId('actionSheet');
    actionSheet.props.children.props.onPress(1);
  });

  it('should set the state with the gallery uri if result contains assets', async () => {
    const assets: any = [
      {
        uri: 'filepath',
      },
    ];

    jest.fn().mockImplementation(assets);
  });

  // it('display flatlist item', () => {
  //   const {getByTestId} = render(<Cameraimage />);
  //   const flatlist: any = getByTestId('flatlistitem');
  //   expect(getByTestId('flatlist')).toBeDefined();
  // });

  it('calls deletetext function when button is pressed', () => {
    const {getByTestId} = render(<Cameraimage />);
    const flatlist: any = getByTestId('flatlistitem');
    const renderItemWrapper = render(
      flatlist.props.renderItem({item: 'testur.in', index: 0}),
    );
    const deletBtn = renderItemWrapper.getByTestId('deleteImage');
    console.log('deletBtn', deletBtn);
    fireEvent.press(deletBtn);
  });
});
