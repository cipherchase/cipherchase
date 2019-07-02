import React, { Component } from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import store from './store';

import MainContainer from './containers/MainContainer.jsx';

const App = () => (
  <Provider>
    <MainContainer />
  </Provider>
);

export default App;
