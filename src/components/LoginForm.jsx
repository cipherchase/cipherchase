import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';
import './form.css';

const mapStateToProps = store => ({
  
});

const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => dispatch(login(username, password)),
});

const LoginForm = ({ signIn }) => {
  // handleChange(event) {
  //   const { name, value } = event.target;
  //   if (name === 'username') this.setState({ username: value });
  //   if (name === 'password') this.setState({ password: value });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(username.value, password.value);
  };

  return (
    <div className="form">
      <ul className="tab-group">
        <li className="tab">
          <a href="/join">Sign Up</a>
        </li>
        <li className="tab active">
          <a href="/auth">Log In</a>
        </li>
      </ul>

      <div className="tab-content">
        <div id="login">
          <h1>Welcome Back!</h1>
          <form onSubmit={handleSubmit}>
            <div className="field-wrap">
              <input
                id="username"
                name="username"
                type="text"
                required
                placeholder="Username:"
                // onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password:"
                // onChange={}
              />
            </div>
            <p className="forgot">
              <a href="#">Forgot Password?</a>
            </p>
            <input className="button button-block" type="submit" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
