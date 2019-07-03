import React from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

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
