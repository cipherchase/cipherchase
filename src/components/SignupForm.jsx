import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/actionCreators';

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
  signUp: (username, password, firstname, lastname, email) => {
    dispatch(signup(username, password, firstname, lastname, email));
  },
});
const SignupForm = ({ signUp }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(username.value, password.value, firstname.value, lastname.value, email.value);
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className="tab active">
          <a href="/join">Sign Up</a>
        </li>
        <li className="tab">
          <a href="/auth">Log In</a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="login">
          <h1>Sign Up </h1>
          <form onSubmit={handleSubmit}>
            <div className="top-row">
              <div className="field-wrap">
                <input
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  required
                />
              </div>
              <div className="field-wrap">
                <input
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="field-wrap">
              <input
                id="email"
                name="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>
            <div className="field-wrap">
              <input
                id="username"
                name="username"
                placeholder="User Name"
                type="text"
                required
              />
            </div>
            <div className="field-wrap">
              <input
                id="password"
                name="password"
                placeholder="Set A Password"
                type="password"
                required
              />
            </div>
            <p className="forgot">
              <a href="#">Continue without signup</a>
            </p>
            <input className="button button-block" type="submit" value="Sign Up"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
