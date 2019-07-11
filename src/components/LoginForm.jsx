import React from 'react';
import { connect } from 'react-redux';
import { login, setUsername, setPassword } from '../actions/actionCreators';

const mapStateToProps = store => ({
  username: store.games.username,
  password: store.games.password,
});

const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => dispatch(login(username, password)),
  setUser: username => dispatch(setUsername(username)),
  setPW: password => dispatch(setPassword(password)),
});

const LoginForm = ({
  username,
  password,
  setUser,
  setPW,
  signIn,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(username, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') setUser(value);
    else if (name === 'password') setPW(value);
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
                onChange={handleChange}
              />
            </div>

            <div className="field-wrap">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password:"
                onChange={handleChange}
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

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
