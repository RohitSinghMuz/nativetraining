/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


import { render, fireEvent } from '@testing-library/react-native';
describe('App', () => {
  it('renders correctly', () => {
    renderer.create(<App />);
  });
  it('should update email and password values when input fields are changed', () => {
    const { getByPlaceholderText } = render(<App />);

    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');

    fireEvent.changeText(emailInput, 'test@example.com');
    fireEvent.changeText(passwordInput, 'password');

    expect(emailInput.props.value).toBe('test@example.com');
    expect(passwordInput.props.value).toBe('password');
  });

  // it('should call onLogin prop with email and password values when login button is pressed', () => {
  //   const onLogin = jest.fn();
  //   const { getByPlaceholderText, getByText } = render(<LoginForm onLogin={onLogin} />);

  //   const emailInput = getByPlaceholderText('Email');
  //   const passwordInput = getByPlaceholderText('Password');
  //   const loginButton = getByText('Login');

  //   fireEvent.changeText(emailInput, 'test@example.com');
  //   fireEvent.changeText(passwordInput, 'password');
  //   fireEvent.press(loginButton);

  //   expect(onLogin).toHaveBeenCalledWith('test@example.com', 'password');
  // });
});
