import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/actionCreators';

const mapStateToProps = store => ({
  
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
            <form onSubmit={this.handleSubmit}>
              <div className="top-row">
                <div className="field-wrap">
                  <input name="firstname" placeholder="First Name" type="text" required value={this.state.firstname} onChange={this.handleChange}/>
                </div>
                <div className="field-wrap">
                  <input name="lastname" placeholder="Last Name" type="text" required value={this.state.lastname} onChange={this.handleChange}/>
                </div>
              </div>
              <div className="field-wrap">
                <input name="email" placeholder="Email Address" type="email" required value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="field-wrap">
                <input name="username" placeholder="User Name" type="text" required value={this.state.username} onChange={this.handleChange}/>
              </div>
              <div className="field-wrap">
                <input name="password" placeholder="Set A Password" type="password" required value={this.state.password} onChange={this.handleChange}/>
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm);
