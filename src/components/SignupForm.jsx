import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/actionCreators';

// Styling
const titleStyle = {
  color: 'black',
  fontSize: '1.2em',
  textAlign: 'center',
};

const box = {
  margin: 'auto',
  alignItems: 'center',
  height: '32em',
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

const forms = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  width: '80px',
  flexDirection: 'column',
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
  signIn: (username, password, firstname, lastname, email) => {
    dispatch(signup(username, password, firstname, lastname, email));
  },
});
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'username') this.setState({ username: value });
    if (name === 'password') this.setState({ password: value });
    if (name === 'firstname') this.setState({ firstname: value });
    if (name === 'lastname') this.setState({ lastname: value });
    if (name === 'email') this.setState({ email: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(
      this.state.username,
      this.state.password,
      this.state.firstname,
      this.state.lastname,
      this.state.email,
    );
  }

  render() {
    return (
      <div style={box}>
        <h4 style={titleStyle}>
          <p>Welcome, please sign up</p>
        </h4>
        <form style={forms} onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              style={inputStyle}
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              style={inputStyle}
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label>
            First Name:
            <input
              style={inputStyle}
              name="firstname"
              type="text"
              value={this.state.firstname}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              style={inputStyle}
              name="lastname"
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              style={inputStyle}
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <input style={submitStyle} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
