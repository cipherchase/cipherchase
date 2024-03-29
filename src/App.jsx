import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainContainer from './containers/MainContainer.jsx';


const App = () => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
);

export default App;
