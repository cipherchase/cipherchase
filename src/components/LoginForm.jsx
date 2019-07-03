import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';

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
    if (name === 'username') this.setState({ username: event.target.value });
    if (name === 'password') this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password);
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
