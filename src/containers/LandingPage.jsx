import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx';
import SignupForm from '../components/SignupForm.jsx';
import Header from './Header.jsx';

const LandingPage = () => (
  <div>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={LoginForm} />
        <Route path="/" exact component={SignupForm} />
      </div>
    </BrowserRouter>
  </div>
);

export default LandingPage;
