import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainContainer from './containers/MainContainer';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;
