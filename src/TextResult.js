import React, { Component } from 'react';
//import './TextResult.css';
// import styled from 'styled-components';

class TextResult extends Component {
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
    return <div className='TextResult' />;
  }

  state = {};
}

TextResult.propTypes = {};

TextResult.defaultProps = {};

export default TextResult;