/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { signUserUp } from '../actions';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleOnChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.signUserUp(this.state);
  };

  render() {
    return (
      <div>
        <h1>SignUp Form</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <br />

          <br />
          <input type="submit" value="Sign up" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUserUp: userInfo => dispatch(signUserUp(userInfo)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
