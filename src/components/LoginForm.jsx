import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';

const mapStateToProps = store => ({
  games: store.games
});

const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => {
    dispatch(login(username, password));
  }
});
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signIn(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
        </label>
        <label>
          Password:
          <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
