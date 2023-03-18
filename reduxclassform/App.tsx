import {Component, ReactNode} from 'react';
import {Provider} from 'react-redux';
import Home from './component/Home';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Home />
        </Provider>
      </>
    );
  }
}

export default App;
