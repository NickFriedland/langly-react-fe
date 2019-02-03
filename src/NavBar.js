import React, { Component } from 'react';
//import './NavBar.css';
// import styled from 'styled-components';

class NavBar extends Component {
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
    return <div className='NavBar' />;
  }

  state = {};
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;