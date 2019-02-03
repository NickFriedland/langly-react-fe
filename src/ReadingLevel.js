import React, { Component } from 'react';
//import './ReadingLevel.css';
// import styled from 'styled-components';

class ReadingLevel extends Component {
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
    return <div className='ReadingLevel' />;
  }

  state = {};
}

ReadingLevel.propTypes = {};

ReadingLevel.defaultProps = {};

export default ReadingLevel;