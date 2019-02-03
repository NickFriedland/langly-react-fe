import React, { Component } from 'react';
//import './NotFound.css';
// import styled from 'styled-components';

class NotFound extends Component {
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
    return <div className='NotFound' />;
  }

  state = {};
}

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;