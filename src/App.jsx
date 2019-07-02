import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './store';

import MainContainer from './containers/MainContainer.jsx';

const App = () => (
  <Provider>
    <MainContainer />
  </Provider>
);

export default App;
