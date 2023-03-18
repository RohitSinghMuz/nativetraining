
import Signup from "../component/Signup";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render, fireEvent, act } from '@testing-library/react-native';
import renderer from "react-test-renderer";
import { Button } from "react-native";
describe("signup testing", () => {
    // it('renders correctly', () => {
    //     const tree = render(<Signup />);
    //     expect(tree).toMatchSnapshot();
    //   });
    it(`renders correctly`, () => {
        const tree = renderer.create(<button>Signup</button>);
        expect(tree).toMatchSnapshot();
      });

  it("signup test Cases", async () => {
        // Add any additional assertions here to verify the component's behavior
      

    const { getByTestId } = render(<Signup navigation={{navigate: jest.fn()}} />);
    const firstname: any = getByTestId("firstname")

    const lastname: any = getByTestId("lastname")
    const email: any = getByTestId("email")
    const password: any = getByTestId("password")
    const confirmPassword: any = getByTestId("confirmPassword")
    await act(async () => {
      await fireEvent.changeText(firstname, "n1");

      await fireEvent.changeText(lastname, "n2");
      await fireEvent.changeText(email, "n3");

      await fireEvent.changeText(password, "n4");
      await fireEvent.changeText(confirmPassword, "n5");
    });
   
console.log('====================================');
console.log("----- value",firstname.props.value
);
console.log('====================================');
  expect(firstname.props.value).toBe('n1');
    expect(lastname.props.value).toBe("n2");
    expect(email.props.value).toBe("n3");
    expect(password.props.value).toBe("n4");
    expect(confirmPassword.props.value).toBe("n5");
  });
  it("validates successfully", async () => {
    const { getByTestId } = render(<Signup navigation={{navigate: jest.fn()}} />);
    const firstname: any = getByTestId("firstname")

    const lastname: any = getByTestId("lastname")
    const email: any = getByTestId("email")
    const password: any = getByTestId("password")
    const confirmPassword: any = getByTestId("confirmPassword")
    await act(async () => {
      await fireEvent.changeText(firstname,  "username");
      await fireEvent.changeText(lastname, "lastname");
      await fireEvent.changeText(email,"rohit2211@gmail.com" );
      await fireEvent.changeText(password,"RohitSingh");
      await fireEvent.changeText(confirmPassword,"RohitSingh");
    });
    

    const submitBtn = getByTestId("addbtn");
    await act(async () => {
      await fireEvent.press(submitBtn);
    });
  });
  it("validates if input is empty", async () => {
    const { getByTestId } = render(<Signup navigation={{navigate: jest.fn()}}/>);
    const firstname: any = getByTestId("firstname")

    const lastname: any = getByTestId("lastname")
    const email: any = getByTestId("email")
    const password: any = getByTestId("password")
    const confirmPassword: any = getByTestId("confirmPassword")

    await act(async () => {
      await fireEvent.changeText(firstname, "");
      await fireEvent.changeText(lastname, "");
      await fireEvent.changeText(email,"efsd");
      await fireEvent.changeText(password, "asd");
      await fireEvent.changeText(confirmPassword, "asd");
    });

    const submitBtn = getByTestId("addbtn");
    await act(async () => {
      await fireEvent.press(submitBtn);
    });
  });
  it("validates if input is invalid", async () => {
    const { getByTestId } = render(<Signup navigation={{navigate: jest.fn()}}/>);
    const firstname: any = getByTestId("firstname")
    const lastname: any = getByTestId("lastname")
    const email: any = getByTestId("email")
    const password: any = getByTestId("password")
    const confirmPassword: any = getByTestId("confirmPassword")

    await act(async () => {
        await fireEvent.changeText(firstname, "a");
        await fireEvent.changeText(lastname,"ad");
        await fireEvent.changeText(email,"h");
        await fireEvent.changeText(password,"sd");
        await fireEvent.changeText(confirmPassword,"sda");
    });

    const submitBtn = getByTestId("addbtn");
    await act(async () => {
      await fireEvent.press(submitBtn);
    });
  });

  it("Signup test Cases", async () => {
    const  {getByTestId}  =render(<Signup navigation={{navigate: jest.fn()}} />)
    const submitBtn = getByTestId("addbtn");
    await act(async () => {
      await fireEvent.press(submitBtn);
    });
  });

  it('handles button presses adddata', () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(<Signup handleSubmit={handleSubmit} navigation={{navigate: jest.fn()}} />);
  const submitButton = getByTestId('submittdata');
  fireEvent.press(submitButton);
  expect(handleSubmit).toBeCalledTimes
})

})
