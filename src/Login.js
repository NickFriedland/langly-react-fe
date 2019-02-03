import React, { Component } from 'react';
//import './Login.css';
// import styled from 'styled-components';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleChange(evt) {
     // runs on every keystroke
    this.setState({
      fullName: evt.target.value
    });
  }

  render() {
    return <div className='Login' />;
  }

  state = {};
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;