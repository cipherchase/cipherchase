import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/actionCreators';

const mapStateToProps = store => ({
  games: store.games
});

const mapDispatchToProps = dispatch => ({
  signIn: (username, password, firstname, lastname, email) => {
    dispatch(signup(username, password, firstname, lastname, email));
  }
});
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', firstname: '', lastname: '', email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    if (name === 'username') this.setState({ username: event.target.value });
    if (name === 'password') this.setState({ password: event.target.value });
    if (name === 'firstname') this.setState({ firstname: event.target.value });
    if (name === 'lastname') this.setState({ lastname: event.target.value });
    if (name === 'email') this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(
      this.state.username,
      this.state.password,
      this.state.firstname,
      this.state.lastname,
      this.state.email
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            name="firstname"
            type="text"
            value={this.state.firstname}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastname"
            type="text"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Email:
          <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
