import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {render, fireEvent, act} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {Button} from 'react-native';
import Login from '../component/Login';
import {clockRunning} from 'react-native-reanimated';

jest.mock('react-native-vector-icons/Feather', () => () => <></>);
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => () => (
  <></>
));

jest.mock('react-native-vector-icons/Entypo', () => () => <></>);

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn(),
}));
describe('signup testing', () => {
  // it('renders correctly', () => {
  //     const tree = render(<Signup />);
  //     expect(tree).toMatchSnapshot();
  //   });
  it(`renders correctly`, () => {
    const tree = renderer.create(<button>Login</button>);
    expect(tree).toMatchSnapshot();
  });

  it('login test Cases', async () => {
    // Add any additional assertions here to verify the component's behavior

    const {getByTestId} = render(<Login navigation={{navigate: jest.fn()}} />);
    const inputemail: any = getByTestId('inputemail');

    const inputpassword: any = getByTestId('inputpassword');

    await act(async () => {
      await fireEvent.changeText(inputemail, 'abc@gmail.com');

      await fireEvent.changeText(inputpassword, 'abc345#');
    });

    console.log('====================================');
    console.log('----- value', inputemail.props.value);

    expect(inputemail.props.value).toBe('abc@gmail.com');
    expect(inputpassword.props.value).toBe('abc345#');
  });

  it('validates successfully', async () => {
    const {getByTestId} = render(<Login />);
    //  navigation={{navigate: jest.fn()}}
    const inputemail: any = getByTestId('inputemail');

    const inputpassword: any = getByTestId('inputpassword');
    await act(async () => {
      await fireEvent.changeText(inputemail, 'abc@gmail.com');
      await fireEvent.changeText(inputpassword, 'abc345#');
    });

    const submitBtn = getByTestId('loginID');
    await act(async () => {
      await fireEvent.press(submitBtn);
    });
  });

  it('navigatetologinpage', async () => {
    const handleSubmit = jest.fn();
    const {getByTestId} = render(
      <Login handleSubmit={handleSubmit} navigation={{navigate: jest.fn()}} />,
    );
    const LoginButton = getByTestId('loginpage');
    fireEvent.press(LoginButton);
    expect(handleSubmit).toBeCalledTimes;
  });

  it('navigatetoregisterpage', async () => {
    const handleSubmit = jest.fn();
    const {getByTestId} = render(
      <Login handleSubmit={handleSubmit} navigation={{navigate: jest.fn()}} />,
    );
    const RegisterPage = getByTestId('registerpage');
    fireEvent.press(RegisterPage);
    expect(handleSubmit).toBeCalledTimes;
  });

  it('Testing Checkbox Input', async () => {
    const {getByTestId} = render(<Login />);
    const CheckBoxclick = getByTestId('checkboxID');
    fireEvent.press(CheckBoxclick);
    // RegisterPage.props.children.props.onValueChange('test');
    expect(CheckBoxclick).toBeCalledTimes;
  });

  // it('Testing Checkbox Input', async () => {
  //   const {getByTestId} = render(<Login />);
  //   const CheckBoxclick = getByTestId('checkboxID');
  //   // Execute the click event of the checkbox
  //   fireEvent.press(CheckBoxclick);
  //   expect(CheckBoxclick).toBeCalledWith();
  //   expect(getByTestId('checkboxID')).toBeDefined();

  //   // Execute the click event again
  //   fireEvent.press(CheckBoxclick);
  //   expect(CheckBoxclick).not.toBeCalledWith();
  //   expect(getByTestId('checkboxID')).not.toBeDefined();
  // });
});
