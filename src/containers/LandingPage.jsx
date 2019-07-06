import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx';
import SignupForm from '../components/SignupForm.jsx';
import Header from './Header.jsx';
import GameContainer from './GameContainer.jsx';

const mapStateToProps = store => ({
  isAuthenticated: store.games.isAuthenticated,
});

const LandingPage = ({ isAuthenticated }) => (
  <div>
    <BrowserRouter>
      <Header />
      {!isAuthenticated ? (
        <div>
          <Route path="/auth" exact component={LoginForm} />
          <Route path="/join" exact component={SignupForm} />
        </div>
      ) : (
        <div>
          <GameContainer />
        </div>
      )}
    </BrowserRouter>
  </div>
);

export default connect(mapStateToProps)(LandingPage);
