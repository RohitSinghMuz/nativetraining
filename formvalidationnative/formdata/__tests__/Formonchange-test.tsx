/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Formonchange from '../Formonchange';
import {render, fireEvent, act} from '@testing-library/react-native';

describe('signup testing', () => {
  it('renders correctly', () => {
    renderer.create(<Formonchange />);
  });
  test('Should apply the value when changing text', () => {
    const handleSubmit = jest.fn();
    const {getByTestId} = render(<Formonchange />);
    const inputname = getByTestId('inputname');
    const inputemail = getByTestId('inputemail');
    const inputpassword = getByTestId('inputpassword');
    const inputCPassword = getByTestId('inputcpassword');
    fireEvent.changeText(inputname, 'adc');
    expect(inputname.props.value).toBe('adc');
    fireEvent.changeText(inputemail, 'adc@gmail.com');
    expect(inputemail.props.value).toBe('adc@gmail.com');
    fireEvent.changeText(inputpassword, 'adc34567#');
    expect(inputpassword.props.value).toBe('adc34567#');
    fireEvent.changeText(inputCPassword, 'adc34567#');
    expect(inputCPassword.props.value).toBe('adc34567#');

    const saveBtn = getByTestId('btnsubmitt');

    fireEvent.press(saveBtn);

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });

  test('when input field is empty', () => {
    const handleSubmit = jest.fn();
    const {getByTestId} = render(<Formonchange />);
    const inputname = getByTestId('inputname');
    const inputemail = getByTestId('inputemail');
    const inputpassword = getByTestId('inputpassword');
    const inputCPassword = getByTestId('inputcpassword');
    fireEvent.changeText(inputname, '');
    expect(inputname.props.value).toBe('');
    fireEvent.changeText(inputemail, '');
    expect(inputemail.props.value).toBe('');
    fireEvent.changeText(inputpassword, '');
    expect(inputpassword.props.value).toBe('');
    fireEvent.changeText(inputCPassword, '');
    expect(inputCPassword.props.value).toBe('');

    const saveBtn = getByTestId('btnsubmitt');

    fireEvent.press(saveBtn);

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
  test('when user inputwronginput', () => {
    const handleSubmit = jest.fn();
    const {getByTestId} = render(<Formonchange />);
    const inputname = getByTestId('inputname');
    const inputemail = getByTestId('inputemail');
    const inputpassword = getByTestId('inputpassword');
    const inputCPassword = getByTestId('inputcpassword');
    fireEvent.changeText(inputname, 'a');
    expect(inputname.props.value).toBe('a');
    fireEvent.changeText(inputemail, 'ssdf');
    expect(inputemail.props.value).toBe('ssdf');
    fireEvent.changeText(inputpassword, 'dd');
    expect(inputpassword.props.value).toBe('dd');
    fireEvent.changeText(inputCPassword, 'ek');
    expect(inputCPassword.props.value).toBe('ek');

    const saveBtn = getByTestId('btnsubmitt');

    fireEvent.press(saveBtn);

    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
