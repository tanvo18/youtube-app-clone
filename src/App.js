import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RootRouter from './pages/router/RootRouter';

class App extends Component {

  render() {

    return (
      <Provider store={this.props.store}>
        <RootRouter />
      </Provider>
    );
  }
}

export default App;
