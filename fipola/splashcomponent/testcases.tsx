import {defineFeature, loadFeature} from 'jest-cucumber';
import {shallow, ShallowWrapper} from 'enzyme';
import * as helpers from '../../../../framework/src/Helpers';
import {runEngine} from '../../../../framework/src/RunEngine';
import {Message} from '../../../../framework/src/Message';
import MessageEnum, {
  getName,
} from '../../../../framework/src/Messages/MessageEnum';
import React from 'react';
import EditProfiles from '../../src/EditProfiles';
const navigation = require('react-navigation');

const screenProps = {
  navigation: navigation,
  id: 'EditProfiles',
};

const feature = loadFeature(
  './__tests__/features/EditProfiles-scenario.feature',
);

jest.mock('react-native-image-crop-picker', () => ({
  openPicker: jest.fn().mockImplementation(() =>
    Promise.resolve({
      uri: 'filepath',
      path: 'test',
    }),
  ),
  openCamera: jest.fn().mockImplementation(() =>
    Promise.resolve({
      uri: 'filepath',
      path: 'test',
    }),
  ),
}));

defineFeature(feature, test => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock('react-native', () => ({Platform: {OS: 'web'}}));
    jest.spyOn(helpers, 'getOS').mockImplementation(() => 'web');
    jest.mock('react-native-image-crop-picker', () => ({
      ImagePicker: jest.fn(),
    }));
    jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
      get: jest.fn().mockReturnValue({width: 400, height: 900}),
      addEventListener: jest
        .fn()
        .mockImplementation((event: string, callback: Function) => {
          callback();
        }),
    }));
  });

  test('I am a User Edit to CustomisableUserProfiles', ({
    given,
    when,
    then,
  }) => {
    let exampleBlockA: ShallowWrapper;
    let instance: EditProfiles;

    given('I am a user loading EditProfiles', () => {
      exampleBlockA = shallow(<EditProfiles {...screenProps} />);
    });

    when('user edit CustomisableUserProfiles', () => {
      instance = exampleBlockA.instance() as EditProfiles;
    });

    then('editProfiles will load with out errors', () => {
      expect(exampleBlockA).toBeTruthy();
    });

    when('user click to Select image', () => {
      const avatarWrapper = exampleBlockA.findWhere(
        node => node.prop('testID') === 'avatarWrapper',
      );
      avatarWrapper.simulate('press');
      avatarWrapper.props().children.props.onEditPress();
    });

    when('user edit profileimage', () => {
      let imgComponent = exampleBlockA.findWhere(
        node => node.prop('size') === 'large',
      );
      imgComponent.simulate('changeText', 'url');
    });
    when('user edit profiles', () => {
      let formikComp = exampleBlockA.findWhere(
        node => node.prop('testID') === 'formikID',
      );
      const formikProps = {
        values: {},
        handleChange: jest.fn().mockImplementation(() => jest.fn()),
        handleBlur: jest.fn(),
        errors: {},
        handleSubmit: jest.fn(),
        touched: {},
      };
      const formikShallow = formikComp.props().children(formikProps).props
        .children[1];
      formikShallow.props.onChangeText('new text for first name');
    });

    when('user click on Modal', () => {
      let modalRequest = exampleBlockA.findWhere(
        node => node.prop('data-testid') === 'ModalID',
      );

      modalRequest.props().onRequestClose();
    });
    when('user click to camera', () => {
      let saveBtn = exampleBlockA.findWhere(
        node => node.prop('testID') === 'cameraOpen',
      );
      saveBtn.simulate('press');
    });

    when('user click to gallery', () => {
      let saveBtn = exampleBlockA.findWhere(
        node => node.prop('testID') === 'pickimage',
      );
      saveBtn.simulate('press');
    });

    when('user click to update Data', () => {
      // let saveBtn = exampleBlockA.findWhere((node) => node.prop('testID') === 'saveData');
      // saveBtn.simulate('press');
    });

    when('User received message and string', () => {
      const responseMsg = new Message(getName(MessageEnum.AccoutLoginSuccess));
      responseMsg.addData(
        getName(MessageEnum.AuthTokenDataMessage),
        'dummy-token',
      );

      runEngine.sendMessage('Unit Test', responseMsg);
    });
  });
});
