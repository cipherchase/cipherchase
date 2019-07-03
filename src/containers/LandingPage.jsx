import React from 'react';
import LoginForm from '../components/LoginForm.jsx';
import SignupForm from '../components/SignupForm.jsx';

const LandingPage = () => (
  <div>
    <div>
      LoginForm
      <LoginForm />
    </div>
    <br />
    <div>
      SignupForm
      <SignupForm />
    </div>
    <br />
  </div>
);

export default LandingPage;
