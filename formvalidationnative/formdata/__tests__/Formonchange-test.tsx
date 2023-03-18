/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Formonchange from '../Formonchange';
import {render, fireEvent} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<Formonchange />);
});
test('Should apply the value when changing text', () => {
  const {getByTestId} = render(<Formonchange />);
  const input = getByTestId('inputname');
  fireEvent.changeText(input, 'adc');
  expect(input.props.value).toBe('adc');
});
test('Should apply the value when   name changing text', () => {
  const {getByTestId} = render(<Formonchange />);
  const input = getByTestId('inputemail');
  fireEvent.changeText(input, 'adc@gmail.com');
  expect(input.props.value).toBe('adc@gmail.com');
});

test('Should apply the value when email  changing text', () => {
  const {getByTestId} = render(<Formonchange />);
  const input = getByTestId('inputpassword');
  fireEvent.changeText(input, 'adc34567#');
  expect(input.props.value).toBe('adc34567#');
});

test('Should apply the value when changing text', () => {
  const {getByTestId} = render(<Formonchange />);
  const input = getByTestId('inputcpassword');
  fireEvent.changeText(input, 'adc34567#');
  expect(input.props.value).toBe('adc34567#');
});
test('when user click on save button', () => {
  const {getByTestId} = render(<Formonchange />);
  const saveBtn = getByTestId('btnsubmitt');
  fireEvent.press(saveBtn);
  expect(saveBtn.props.value).toBeCalled();
});
