import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';
import './form.css';

const forms = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  width: '80px',
  flexDirection: 'column',
};

const titleStyle = {
  color: 'black',
  fontSize: '1.2em',
  textAlign: 'center',
};

const box = {
  margin: 'auto',

  alignItems: 'center',
  height: '25em',
  width: '30em',
  border: '0.2em solid grey',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignContent: 'center',
  alignSelf: 'stretch',
  fontWeight: '900',
};

const inputStyle = {
  margin: '7px',
  width: '15em',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid grey',
  backgroundColor: '#f4f4f4',
  opacity: '0.6',
  height: '1.7em',
  borderRadius: '8px',
};

const submitStyle = {
  color: 'black',
  backgroundColor: 'lightblue',
  border: '1px solid grey',
  borderRadius: '8px',
  padding: '0.5em',
  width: '15em',
  letterSpacing: '10px',
  fontFamily: 'serif',
  margin: '2em',
};

const mapStateToProps = store => ({
  games: store.games,
});

const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => {
    dispatch(login(username, password));
  },
});
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'username') this.setState({ username: value });
    if (name === 'password') this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="form">

        <ul className="tab-group">
          <li className="tab">
            <a href="#signup">Sign Up</a>
          </li>
          <li className="tab active">
            <a href="#login">Log In</a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="login">
            <h1>Welcome Back!</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="field-wrap">
                <input name="username" type="text" required placeholder="Username:" value={this.state.username} onChange={this.handleChange} />
              </div>

              <div className="field-wrap">
                <input name="password" type="password" required placeholder="Password:" value={this.state.password} onChange={this.handleChange} />
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
