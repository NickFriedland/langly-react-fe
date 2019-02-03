import React, { Component } from 'react';
//import './Login.css';
// import styled from 'styled-components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.username) {
      await this.register();
    } else {
      await this.login();
    }
  }

  handleChange(evt) {
     // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return <div className='Login'>
      <h1>This is the login page</h1>
    </div>;
  }

  state = {};
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;